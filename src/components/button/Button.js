import React from "react";

const Button = (props) => {
    return (
        <button
            {...props}
            className={`${
                props.className ? props.className : ""
            } cursor-pointer text-white bg-primary-400 px-4 py-2 rounded-lg `}
        />
    );
};

export default Button;
