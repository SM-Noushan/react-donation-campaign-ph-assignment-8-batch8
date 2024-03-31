import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Typography, Button, Spinner, Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useDonationData from "../../hooks/useDonationData";
import { storeData } from "../../utils/localStorage";

function WarningIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const DonationDetails = () => {
    const [item, setItem] = useState([]);
    const { data, loading } = useDonationData();
    const [open, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
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
        if (status) {
            setAlertMsg('Donated successfully');
            return setOpen(true);
        }
        setAlertMsg('Already Donated');
        return setOpen(true);
    }
    return (
        <Card className="my-20 max-w-7xl mx-auto overflow-clip shadow-none">
            <Alert
                icon={alertMsg.includes('success') ? <SuccessIcon /> : <WarningIcon />}
                className="fixed z-10 w-auto top-0 right-0"
                open={open}
                onClose={() => setOpen(false)}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
            >
                {alertMsg}
            </Alert>
            {
                loading ?
                    <Spinner className="h-16 w-16 mx-auto my-20 text-gray-900/50" />
                    :
                    <>
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
                    </>
            }
        </Card>
    );
};

export default DonationDetails;