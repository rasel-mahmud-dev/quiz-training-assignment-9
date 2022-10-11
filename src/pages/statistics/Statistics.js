import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Statistics = () => {
    const allQuiz = useLoaderData();

    const [data, setSata] = useState(0);
    const [chartWidth, setChartWidth] = useState(600);

    useEffect(() => {
        let d = allQuiz?.map((quiz, index) => {
            return {
                topicName: quiz.name,
                totalQuiz: quiz.total,
            };
        });
        setSata(d);
    }, [allQuiz]);

    function handleResize() {
        if (window.innerWidth < 380) {
            setChartWidth(250);
        } else if (window.innerWidth < 500) {
            setChartWidth(350);
        } else if (window.innerWidth < 600) {
            setChartWidth(450);
        } else {
            setChartWidth(600);
        }
    }
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="container">
            <div className="mt-32 w-full flex justify-center ">
                <div className="statistic">
                    <BarChart width={chartWidth} height={300} data={data}>
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
            </div>
            <h1 className="text-center text-3xl font-semibold text-primary-400">Quiz Statistics</h1>
        </div>
    );
};

export default Statistics;
