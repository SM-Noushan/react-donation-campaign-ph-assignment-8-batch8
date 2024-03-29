import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryList = ({ data }) => {
    const {
        id,
        picture,
        title,
        category,
        cardBG,
        categoryBG,
        textColor } = data || {};
    return (
        <Link to={`/donation-details/${id}`}>
            <Card style={{ backgroundColor: cardBG }} className="mt-6 max-w-[19rem] cursor-pointer transition hover:scale-105">
                <CardHeader color="blue-gray" className="relative shadow-none h-48 mx-0 rounded-b-none">
                    <img
                        className="size-full"
                        src={picture}
                        alt="cover-image"
                    />
                </CardHeader>
                <CardBody className="space-y-4 h-40">
                    <Button style={{ backgroundColor: categoryBG, color: textColor }} className="bg-opacity-20" size="sm" disabled>{category}</Button>
                    <Typography style={{ color: textColor }} variant="h5" className="mb-2">
                        {title}
                    </Typography>
                </CardBody>
            </Card>
        </Link>
    );
};

CategoryList.propTypes = {
    data: PropTypes.object.isRequired
};

export default CategoryList;