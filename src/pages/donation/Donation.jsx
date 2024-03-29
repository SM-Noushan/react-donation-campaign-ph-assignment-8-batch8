import { Button } from "@material-tailwind/react";
import DonationList from "../../components/DonationList";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

const Donation = () => {
    const { localData } = useLocalStorage();
    const [viewData, setViewData] = useState([]);
    useEffect(() => {
        setViewData(localData.slice(0, 4));
    }, [localData])
    const handleSellAll = () => {
        setViewData(localData);
    }
    return (
        <section className="max-w-7xl mx-auto my-20 space-y-6">
            <div className="grid grid-cols-2 gap-6">
                {
                    viewData.map(data => <DonationList key={data.id} data={data} />)
                }

            </div>
            <div className="w-[120px] mx-auto">
                {
                    viewData.length && localData.length !== viewData.length && <Button onClick={handleSellAll} style={{ backgroundColor: '#009444' }} className="bg-opacity-20 shadow-none mt-2.5" size="lg">See All</Button>
                }
            </div>
        </section >
    );
};

export default Donation;