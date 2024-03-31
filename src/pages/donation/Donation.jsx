import { Button } from "@material-tailwind/react";
import DonationList from "../../components/DonationList";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useState } from "react";

const Donation = () => {
    const { localData } = useLocalStorage();
    const [seeAll, setSeeAll] = useState(false);
    return (
        <section className="max-w-7xl mx-auto my-20 space-y-6">
            <div className="grid grid-cols-2 gap-6">
                {
                    localData.slice(0, seeAll ? localData.length : 4).map(data => <DonationList key={data.id} data={data} />)
                }

            </div>
            <div className="w-32 mx-auto">
                {
                    localData.length > 4 && <Button onClick={() => setSeeAll(!seeAll)} style={{ backgroundColor: '#009444' }} className="bg-opacity-20 shadow-none mt-2.5" size="lg">{seeAll ? 'See Less' : 'See All'}</Button>
                }
            </div>
        </section >
    );
};

export default Donation;