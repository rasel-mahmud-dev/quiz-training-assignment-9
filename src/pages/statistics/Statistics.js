import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Statistics = () => {
    const allQuiz = useLoaderData();

    const [data, setSata] = useState(0);

    useEffect(() => {
        let d = allQuiz?.map((quiz, index) => {
            return {
                topicName: quiz.name,
                totalQuiz: quiz.total,
            };
        });
        setSata(d);
    }, [allQuiz]);

    return (
        <div className="container">
            <div className="mt-32 w-full flex justify-center ">
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="topicName" stroke="#3fa544" />
                    <YAxis dataKey="totalQuiz" stroke="#3fa544" />
                    <Tooltip wrapperStyle={{ width: 150, backgroundColor: "#ccc" }} />
                    <Legend
                        width={100}
                        wrapperStyle={{
                            top: 40,
                            right: 20,
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #3fa544",
                            borderRadius: 3,
                            lineHeight: "20px",
                        }}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="totalQuiz" fill="#3fa544" barSize={30} />
                </BarChart>
            </div>
            <h1 className="text-center text-3xl font-semibold text-primary-400">Quiz Statistics</h1>
        </div>
    );
};

export default Statistics;
