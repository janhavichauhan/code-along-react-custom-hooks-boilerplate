import { useState , useEffect } from 'react'

function Storage(key , initialValue) {
    const [value, setValue] = useState(() => {
        const SValue = localStorage.getItem(key);
        return SValue !== null ? SValue : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
        sessionStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default Storage
       