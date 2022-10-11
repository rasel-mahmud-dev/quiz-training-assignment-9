import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/Button";
import Topic from "../../components/topic/Topic";

const HomePage = () => {
    const quiz = useLoaderData();

    return (
        <div className="">
            <header className="home-banner">
                <div className="container">
                    <div className="overlay"></div>
                    <div className="content relative z-20 pb-20">
                        <h2 className="text-4xl text-center font-semibold text-white py-4">
                            We help you learn what you love{" "}
                        </h2>
                        <p className="max-w-screen-lg mx-auto text-center mt-4 text-neutral-200 font-normal ">
                            We provide high quality education system and also better user experience. Each topic has lot
                            of quiz that you will able prepare for jobs focus. Our main target is ardent learner who
                            passionate about their skill
                        </p>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="mt-20">
                    <h4 className="mt-2 font-semibold text-2xl text-neutral-800">Popular Topics</h4>
                    <p className="text-neutral-500">Frequently chosen these topics</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                        {quiz ? (
                            quiz.map((item) => <Topic item={item} />)
                        ) : (
                            <div>
                                <h1>No Quiz found</h1>
                            </div>
                        )}
                    </div>
                </div>
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
