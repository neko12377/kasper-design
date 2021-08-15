import {useCallback, useRef} from "react";

export const useDebounce = (callback: Function, delay: number = 500) => {
    const timer = useRef<any>(undefined);
    const debounce = useCallback(() => {
        const hasTimer = !!timer.current;
        !hasTimer && callback();
        hasTimer && clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            hasTimer && callback();
            timer.current = undefined;
        }, delay);
    }, [delay]);
    return debounce;
};
