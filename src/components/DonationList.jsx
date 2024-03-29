import { Card, CardHeader, CardBody, Typography, Button, CardFooter } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
const DonationList = ({ data }) => {
    const {
        id,
        picture,
        title,
        category,
        cardBG,
        categoryBG,
        textColor,
        price } = data || {};
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/donation-details/${id}`);
    }
    return (
        <Link to={`/donation-details/${id}`}>
            <Card style={{ backgroundColor: cardBG }} className="w-full max-w-[48rem] flex-row shadow-none h-56">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={picture}
                        alt="donation-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Button style={{ backgroundColor: categoryBG, color: textColor }} className="bg-opacity-20" size="sm" disabled>{category}</Button>
                    <div className="h-24">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {title}
                        </Typography>
                        <Typography style={{ color: textColor }} variant="small" className="mb-4 uppercase">
                            {`${price}.00`}
                        </Typography>
                    </div>
                    <Button onClick={handleNavigate} style={{ backgroundColor: textColor }} className="bg-opacity-20 shadow-none mt-2.5">View Details</Button>
                </CardBody>
            </Card>
        </Link>
    );
};

export default DonationList;