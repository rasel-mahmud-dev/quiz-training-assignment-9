import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Topic = ({ item }) => {
    const { id, name, logo, total } = item;

    return (
        <div key={item.id} className="shadow-primary-xs rounded-md overflow-hidden">
            <div className="bg-primary-300">
                <img src={logo} className="" alt={name} />
            </div>
            <div className="p-3 mb-2">
                <div className="flex justify-between items-center flex-col">
                    <h4 className="text-xl text-primary-400 font-medium">{name}</h4>
                    <p className="text-primary-400 text-sm font-medium">Total Question {total}</p>
                    <Link to={`quiz/${id}`}>
                        <Button className="whitespace-nowrap mt-2">
                            Start Practise
                            <FontAwesomeIcon icon={faAngleRight} className="text-white ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;
