import { useState } from "react";
import Banner from "../../components/Banner";
import Category from "../../components/Category";

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <Banner setSearchValue={setSearchValue} />
            <Category searchValue={searchValue} />
        </>
    );
};

export default Home;