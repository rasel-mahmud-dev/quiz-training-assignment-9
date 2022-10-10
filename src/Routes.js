import HomePage, { loadAllQuiz } from "./pages/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TopicQuizDetail, { loadTopicQuiz } from "./pages/topicQuizDetail/TopicQuizDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // loader: rootLoader,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: loadAllQuiz,
            },
            {
                path: "/quiz/:topicId",
                element: <TopicQuizDetail />,
                loader: loadTopicQuiz,
            },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
