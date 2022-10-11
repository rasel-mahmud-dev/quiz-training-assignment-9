import HomePage, { loadAllQuiz } from "./pages/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TopicQuizDetail, { loadTopicQuiz } from "./pages/topicQuizDetail/TopicQuizDetail";
import Blogs from "./pages/blogs/Blogs";

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

            {
                path: "/blogs",
                element: <Blogs />,
            },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
