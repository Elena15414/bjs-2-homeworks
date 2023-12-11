//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {

        const hash = md5(args);

        const objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        } else {
            const value = func(...args);
            cache.push({ hash, value });
            if (cache.length > 5) {
                cache.shift();
            }
            console.log("Вычисляем: " + value);
            return "Вычисляем: " + value;
        }
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;

    function wrapper(...args) {
        wrapper.allCount++;

        if (timeoutId) {
            clearTimeout(timeoutId);
        } else {
            func(args);
            wrapper.count++;
        }
        timeoutId = setTimeout(() => {
            func(args);
            wrapper.count++;
        }, delay);

    }
    wrapper.allCount = 0;
    wrapper.count = 0;

    return wrapper;
}
