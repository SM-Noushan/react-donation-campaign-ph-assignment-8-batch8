import { useEffect, useState } from "react";

const useDonationData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(!loading);
            const res = await fetch("/data.json")
            const data = await res.json()
            setData(data);
            setLoading(!loading)
        }
        fetchData();
    }, [])
    return { data, loading };
};

export default useDonationData;