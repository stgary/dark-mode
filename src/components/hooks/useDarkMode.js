import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {

    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
       if(localStorage.getItem(initialValue) === true) {
        document.body.classList.add('dark-mode');
       } else {
        document.body.classList.remove('dark-mode');
       }
    }, [initialValue])

    return [value, setValue];
}