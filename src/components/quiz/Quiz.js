import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const Quiz = ({ question, index }) => {
    const { id, question: questionName, options, correctAnswer } = question;

    const [selectOption, setSelectOption] = useState("");
    const [isCorrect, setCorrect] = useState(false);

    function chooseAnswerHandler(answer) {
        setSelectOption(answer);
        let a = answer === correctAnswer;
        setCorrect(a);
        if (a) {
            toast.success("Congratulation! You are correct", {
                icon: "👏",
            });
        } else {
            toast.error("OOps! you are wrong");
        }
    }

    return (
        <div className="shadow-primary-sm m-8 p-4 rounded-md text-center">
            <Toaster />

            <h2 className="text-primary-400 text-xl p-4 mb-4">
                Quiz No. {index + 1} {questionName}
            </h2>

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
                                    ? opt === selectOption && "bg-primary-500/30"
                                    : opt === selectOption && "bg-red-600 hover:bg-red-600"
                            }
                            
                         `}
                    >
                        <input onChange={() => chooseAnswerHandler(opt)} type="radio" name={id} id={opt} />
                        <h1 className="text-primary-300">{opt}</h1>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
