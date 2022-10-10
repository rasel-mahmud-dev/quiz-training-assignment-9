import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../../components/quiz/Quiz";

const TopicQuizDetail = () => {
    const topic = useLoaderData();

    return (
        <div className="max-w-screen-md mx-auto">
            {topic && (
                <div className="mt-16 mb-4">
                    <h1 className="text-center text-3xl font-semibold text-primary-400">Quiz of {topic.name}</h1>

                    {topic?.questions.map((question, index) => (
                        <Quiz question={question} key={question.id} index={index} />
                    ))}
                </div>
            )}
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
