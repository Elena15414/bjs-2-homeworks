class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {

        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            callback,
            time,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);

    }

    getCurrentFormattedTime() {
        const now = new Date();
        let hours = String(now.getHours()).padStart(2, "0");
        let minutes = String(now.getMinutes()).padEnd(2, "0");
        return `${hours}:${minutes}`
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.callback();
                    alarm.canCall = false;
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true)
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];

    }

}
