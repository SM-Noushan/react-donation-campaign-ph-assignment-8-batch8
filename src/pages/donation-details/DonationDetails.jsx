import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useDonationData from "../../hooks/useDonationData";
import { storeData } from "../../utils/localStorage";

const DonationDetails = () => {
    const [item, setItem] = useState([]);
    const { data, loading } = useDonationData();
    const { id } = useParams();
    useEffect(() => {
        setItem(data.find(d => d.id === parseInt(id)))
    }, [data, id])
    const {
        picture,
        title,
        price,
        description,
        textColor } = item || {};
    const handleDonate = () => {
        const status = storeData(item);
        if (status)
            return alert('Donated successfully');
        return alert('Already donated');
    }
    return (
        <Card className="my-20 max-w-7xl mx-auto overflow-clip shadow-none">
            <CardHeader color="blue-gray" className="relative flex flex-col mx-0">
                <img
                    className="h-[640px] shadow-none"
                    src={picture}
                    alt="cover-image"
                />
                <div className="absolute bottom-0 w-full bg-black/50 p-8">
                    <Button onClick={() => handleDonate()} style={{ backgroundColor: textColor }} className="opacity-100" size="lg">{`Donate ${price}`}</Button>
                </div>
            </CardHeader>
            <CardBody className="space-y-4 px-0">

                <Typography variant="h3" className="mb-2">
                    {title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
};

export default DonationDetails;