import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import PropTypes from "prop-types";

const Banner = ({ setSearchValue }) => {
    const searchRef = useRef('');
    const handleOnKeyUp = ({ target, key }) => {
        if (key === 'Enter')
            setSearchValue(target.value.trim());
    }
    return (
        <div className="h-[450px] flex flex-col justify-center items-center space-y-4 relative">
            <div className="absolute inset-0 bg-[url('/resources/bg.jpg')] bg-no-repeat bg-cover bg-center opacity-10" />
            <Typography variant="h2">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    inputRef={searchRef}
                    onKeyUp={handleOnKeyUp}
                    type="text"
                    label="Search"
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    onClick={() => setSearchValue(searchRef.current.value)}
                    size="sm"
                    color="red"
                    className="!absolute right-1 top-1 rounded"
                >
                    Search
                </Button>
            </div>
        </div>
    );
};
Banner.propTypes = {
    setSearchValue: PropTypes.func.isRequired
};

export default Banner;