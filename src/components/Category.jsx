import useDonationData from '../hooks/useDonationData';
import CategoryList from './CategoryList';

const Category = () => {
    const { data, loading } = useDonationData();
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-20 max-w-7xl mx-auto">
            {
                data.map(item => <CategoryList key={item.id} data={item} />)
            }
        </div>
    );
};

export default Category;