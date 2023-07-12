import { useState } from "react"

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(()=>{
        const storedValue = JSON.parse(localStorage.getItem(key))
        if(storedValue!==null){
            return storedValue
        }else{
            localStorage.setItem(key, JSON.stringify(defaultValue))
            return defaultValue;
        }
    })
    const setLocalStorage=(newValue)=>{
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue))
    }
    return [value, setLocalStorage]
}

export default useLocalStorage