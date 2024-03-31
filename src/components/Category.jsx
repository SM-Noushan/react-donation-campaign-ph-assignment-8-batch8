import { useEffect, useState } from 'react';
import useDonationData from '../hooks/useDonationData';
import CategoryList from './CategoryList';
import PropTypes from 'prop-types';
import { Spinner, Alert } from "@material-tailwind/react";

const Category = ({ searchValue }) => {
    const { data, loading } = useDonationData();
    const [filteredData, setFilteredData] = useState([]);
    const [floading, setFloading] = useState(true);
    useEffect(() => {
        setFloading(true);
        if (searchValue)
            setFilteredData(data.filter(item => item.category.toLowerCase().includes(searchValue.toLowerCase())));
        else
            setFilteredData(data);
        setFloading(false);
    }, [data, searchValue])

    return (
        <>
            {
                (loading || floading) ?
                    <Spinner className="h-16 w-16 mx-auto my-20 text-gray-900/50" />
                    :
                    filteredData.length ?
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-20 max-w-7xl mx-auto">
                            {
                                filteredData.map(item => <CategoryList key={item.id} data={item} />)
                            }
                        </div>
                        :
                        <Alert color="amber" className="text-white max-w-7xl my-20 mx-auto py-8 text-3xl justify-center">No Data Found</Alert>
            }
        </>
    );
};
Category.propTypes = {
    searchValue: PropTypes.string.isRequired
};
export default Category;