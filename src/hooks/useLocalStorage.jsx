import { useEffect, useState } from "react";
import { getData } from "../utils/localStorage";

const useLocalStorage = () => {
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        setLocalData(getData());
    }, [])
    return { localData }
};

export default useLocalStorage;