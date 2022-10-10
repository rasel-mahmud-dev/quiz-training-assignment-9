import React from "react";

const Button = (props) => {
    return (
        <button
            {...props}
            className={`${props.className ? props.className : ""} text-white bg-rose-400 px-4 py-2 rounded-lg `}
        />
    );
};

export default Button;
