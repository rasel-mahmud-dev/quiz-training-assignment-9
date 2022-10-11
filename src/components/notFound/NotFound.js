import React from "react";

import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../button/Button";

const NotFound = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center text-neutral-800  text-xl">
                <h1 className="text-neutral-800 font-bold text-6xl">Oops!</h1>
                <p className="my-6 font-medium text-neutral-700">Sorry, an unexpected error has occurred.</p>
                <p className="text-neutral-500 italic">
                    <i>{error.statusText || error.message}</i>
                </p>
                <div className="mt-4">
                    <Button onClick={() => navigate(-1)}>Go to back</Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
