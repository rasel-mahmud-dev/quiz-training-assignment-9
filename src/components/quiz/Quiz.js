import React from "react";

// {
//     "options": [
//     "building  User Interface",
//     "building Database",
//     "building User Data Flow",
//     "building  Shop"
// ],
//         "id": "632800dfb0e009073fe05300",
//         "question": "<p>React is mainly used&nbsp;for _______ (if needed, google it)</p>",
//         "correctAnswer": "building  User Interface"
// }

const Quiz = ({ question, index }) => {
    return (
        <div className="shadow-primary-sm m-8 p-4 rounded-md text-center">
            <h2 className="text-primary-400 text-xl p-4 mb-4">
                Quiz No. {index + 1} {question.question}
            </h2>
            <div className="grid grid-cols-2 gap-4">
                {question.options.map((opt) => (
                    <label
                        key={opt}
                        htmlFor={opt}
                        className="border border-primary-300/30 cursor-pointer p-4 rounded-lg flex items-center  gap-2 hover:bg-primary-100/50"
                    >
                        <input type="radio" name={question.id} id={opt} />
                        <h1 className="text-primary-300">{opt}</h1>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
