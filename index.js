function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function throttle(fn, interval) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}

const debouncedFunction = debounce((msg) => {
    console.log(msg);
}, 2000);

console.log("Debounce Test:");
debouncedFunction("Start");    
setTimeout(() => debouncedFunction("Continue"), 500);  
setTimeout(() => debouncedFunction("End"), 1500);       

const throttledFunction = throttle((msg) => {
    console.log(msg);
}, 1000);

console.log("Throttle Test:");
throttledFunction("First");    
setTimeout(() => throttledFunction("Second"), 500);     
setTimeout(() => throttledFunction("Third"), 1000);     
setTimeout(() => throttledFunction("Fourth"), 3000);    

