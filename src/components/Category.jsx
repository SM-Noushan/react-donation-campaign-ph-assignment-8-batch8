import { useEffect, useState } from 'react';
import useDonationData from '../hooks/useDonationData';
import CategoryList from './CategoryList';
import PropTypes from 'prop-types';

const Category = ({ searchValue }) => {
    const { data, loading } = useDonationData();
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (searchValue)
            setFilteredData(data.filter(item => item.category.toLowerCase().includes(searchValue.toLowerCase())));
        else
            setFilteredData(data);
    }, [data, searchValue])

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-20 max-w-7xl mx-auto">
            {
                filteredData.map(item => <CategoryList key={item.id} data={item} />)
            }
        </div>
    );
};
Category.propTypes = {
    searchValue: PropTypes.string.isRequired
};
export default Category;