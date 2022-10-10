import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Quiz = ({ question, index }) => {
    const { id, question: questionName, options, correctAnswer } = question;

    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setCorrect] = useState(false);

    const [isAnsweredByEyeIcon, setAnsweredByEyeIcon] = useState(false);

    function chooseAnswerHandler(answer) {
        setSelectedOption(answer);
        let a = answer === correctAnswer;
        setCorrect(a);
        if (a) {
            toast.success("Congratulation! You are correct", {
                icon: "👏",
            });
        } else {
            toast.error("OOps! you are wrong");
        }
        setAnsweredByEyeIcon(false);
    }

    function handleShowCorrectAns() {
        setSelectedOption(isAnsweredByEyeIcon ? "" : correctAnswer);
        setCorrect(!isAnsweredByEyeIcon);
        setAnsweredByEyeIcon(!isAnsweredByEyeIcon);
    }

    return (
        <div className="shadow-primary-sm m-8 p-4 rounded-md text-center relative">
            <Toaster />

            <h2 className="text-primary-400 text-xl px-6 py-1 mb-4 ">
                Quiz No. {index + 1} {questionName}
            </h2>

            <FontAwesomeIcon
                icon={isAnsweredByEyeIcon ? faEyeSlash : faEye}
                onClick={handleShowCorrectAns}
                className="cursor-pointer absolute right-6 top-6"
            />

            <div className="grid grid-cols-2 gap-4">
                {options.map((opt) => (
                    <label
                        key={opt}
                        htmlFor={opt}
                        className={`border
                            border-primary-300/30
                            cursor-pointer p-4
                            rounded-lg flex
                            items-center
                             gap-2
                             hover:bg-primary-500/50
                            ${
                                isCorrect
                                    ? opt === selectedOption && "bg-primary-500/30"
                                    : opt === selectedOption && "bg-red-600 hover:bg-red-600"
                            }
                            
                         `}
                    >
                        <input
                            checked={selectedOption === opt}
                            onChange={() => chooseAnswerHandler(opt)}
                            type="radio"
                            name={id}
                            id={opt}
                        />
                        <h1 className="text-primary-300">{opt}</h1>
                    </label>
                ))}
            </div>

            {isAnsweredByEyeIcon && (
                <div className="mt-6  pb-2">
                    <h1>Correct Answer is:</h1>
                    <p>{correctAnswer}</p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
