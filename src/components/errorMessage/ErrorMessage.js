import React from "react";

const ErrorMessage = (props) => {
    return (
        <div className={`mt-32  ${props?.className ? props.className : ""}`}>
            <h1 className="text-center text-red-400 font-bold text-2xl">{props.children}</h1>
        </div>
    );
};

export default ErrorMessage;
