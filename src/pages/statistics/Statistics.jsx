import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import useDonationData from "../../hooks/useDonationData";
import useLocalStorage from "../../hooks/useLocalStorage";


const chartConfigFunc = (total, donated) => {
    const totalPer = (donated / total) * 100;
    const donatedPer = ((total - donated) / total) * 100;
    return {
        type: "pie",
        series: [totalPer, donatedPer],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: "",
            },
            labels: ['My Donation', 'Total Donation'],
            dataLabels: {
                enabled: true,
            },
            colors: ["#00C49F", "#FF444A"],
            legend: {
                show: true,
                position: 'bottom',
                fontSize: '20px',
            },
            responsive: [{
                breakpoint: 640,
                options: {
                    legend: {
                        fontSize: '12px',
                    },
                },
            }]
        },
    }
};

export default function Statistics() {
    const { data } = useDonationData();
    const { localData } = useLocalStorage();
    return (
        <Card className="shadow-none">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center justify-center"
            >
                <div className="w-max rounded-lg bg-gray-600 p-5 text-white">
                    <Square3Stack3DIcon className="h-6 w-6" />
                </div>
                <div>
                    <Typography variant="h3" color="blue-gray">
                        Donation Statistics
                    </Typography>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        <span className="mr-4 text-[#FF444A]">Total Donation</span>
                        <span className="text-[#00C49F]">My Donation</span>
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="mt-4 px-0 items-center justify-center flex">
                <Chart {...chartConfigFunc(data.length, localData.length)} className="*:size-[320px] md:*:size-[640px]" />
            </CardBody>
        </Card>
    );
}