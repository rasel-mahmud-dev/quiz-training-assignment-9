import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../../components/quiz/Quiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle, faCheckDouble, faList, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const TopicQuizDetail = () => {
    const topic = useLoaderData();

    const [quizSlats, setQuizSlats] = useState({
        wrongAnswer: [],
        correctAnswer: [],
    });

    function handleAnswer(questionId, isCorrect) {
        let updatedQuizSlats = { ...quizSlats };

        // let correctIndex = updatedQuizSlats.correctAnswer.indexOf(questionId);
        let wrongIndex = updatedQuizSlats.wrongAnswer.indexOf(questionId);

        if (isCorrect) {
            let correctIndex = updatedQuizSlats.correctAnswer.indexOf(questionId);
            if (correctIndex === -1) {
                // add new answer
                updatedQuizSlats.correctAnswer = [...updatedQuizSlats.correctAnswer, questionId];
            } else {
                // update answer
                updatedQuizSlats.correctAnswer[correctIndex] = questionId;
            }

            // remove from wrong answer
            // check if this answer exist in wrong answer. then remove it
            let isInWrongIndex = updatedQuizSlats.wrongAnswer.indexOf(questionId);
            if (isInWrongIndex !== -1) {
                updatedQuizSlats.wrongAnswer.splice(isInWrongIndex, 1);
            }
        } else {
            if (wrongIndex === -1) {
                // add new wrong answer
                updatedQuizSlats.wrongAnswer = [...updatedQuizSlats.wrongAnswer, questionId];
            } else {
                // update wrong answer
                updatedQuizSlats.wrongAnswer[wrongIndex] = questionId;
            }

            // remove from correct answer
            // check if this answer exist in correct answer. then remove it
            let isInCorrectIndex = updatedQuizSlats.correctAnswer.indexOf(questionId);
            if (isInCorrectIndex !== -1) {
                updatedQuizSlats.correctAnswer.splice(isInCorrectIndex, 1);
            }
        }

        setQuizSlats(updatedQuizSlats);
    }

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div>
            {/**** quiz slats *******/}
            <div className="bg-primary-100 p-4 mt-10 mx-4 relative md:fixed right-0 xl:right-32 rounded-md z-20">
                <h1 className="text-white font-semibold text-xl mb-3 ">Quiz Slats</h1>

                <div className="text-neutral-100">
                    <li className="list-none py-1">
                        <FontAwesomeIcon icon={faList} className="text-white mr-1.5" />
                        Total Quiz : <span className="font-medium">{topic.total}</span>
                    </li>
                    <li className="list-none py-1">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-1.5" />
                        Correct Answer <span className="font-medium">{quizSlats.correctAnswer.length}</span>
                    </li>
                    <li className="list-none py-1">
                        <FontAwesomeIcon icon={faTimesCircle} className="text-white mr-1.5" />
                        Wrong Answer <span className="font-medium">{quizSlats.wrongAnswer.length}</span>
                    </li>
                    <li className="list-none py-1">
                        <FontAwesomeIcon icon={faCheckDouble} className="text-white mr-1.5" />
                        Total Completed{" "}
                        <span className="font-medium">
                            {quizSlats.wrongAnswer.length + quizSlats.correctAnswer.length} in {topic.total}
                        </span>
                    </li>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto">
                {topic && (
                    <div className="mt-6 md:mt-16 mb-4">
                        <h1 className="text-center text-3xl font-semibold text-primary-400">Quiz of {topic.name}</h1>

                        {topic?.questions.map((question, index) => (
                            <Quiz
                                handleAnswer={handleAnswer}
                                quizSlats={quizSlats}
                                question={question}
                                key={question.id}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export function loadTopicQuiz({ params: { topicId } }) {
    return fetch(`https://openapi.programming-hero.com/api/quiz/${topicId}`)
        .then((data) => data.json())
        .then((data) => data.data)
        .catch((ex) => {
            return null;
        });
}

export default TopicQuizDetail;
