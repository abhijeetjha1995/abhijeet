import {useState} from 'react'

const useSomething=()=>{
    const [count, setCount] = useState(0);

    const handleincre=()=>{
        setCount(count + 1);
    }  
    return {
        count,
        handleincre
}
}

    export default useSomething;