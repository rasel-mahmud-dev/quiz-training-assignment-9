import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/Button";

const HomePage = () => {
    const quiz = useLoaderData();

    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                {quiz ? (
                    quiz.map((item) => (
                        <div key={item.id} className="shadow-primary-xs rounded-md overflow-hidden">
                            <div className="bg-primary-400 rounded-md m-2 ">
                                <img src={item.logo} className="" alt={item.name} />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl text-primary-400 font-medium">{item.name}</h4>
                                    <Link to={`quiz/${item.id}`}>
                                        <Button className="whitespace-nowrap">
                                            Start Practise
                                            <FontAwesomeIcon icon={faAngleRight} className="text-white ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <h1>No Quiz found</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export function loadAllQuiz() {
    return fetch("https://openapi.programming-hero.com/api/quiz")
        .then((data) => data.json())
        .then((data) => data.data)
        .catch((ex) => {
            return null;
        });
}

export default HomePage;
