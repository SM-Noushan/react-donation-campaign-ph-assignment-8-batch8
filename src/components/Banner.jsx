import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

const Banner = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
        <div className="h-[450px] border-4 border-red-400 flex flex-col justify-center items-center space-y-4 relative">
            <div className="absolute inset-0 bg-[url('/resources/bg.jpg')] bg-no-repeat bg-cover bg-center opacity-10" />
            <Typography variant="h2">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    type="text"
                    label="Search"
                    value={email}
                    onChange={onChange}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
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

export default Banner;