import HomePage, { loadAllQuiz } from "./pages/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TopicQuizDetail, { loadTopicQuiz } from "./pages/topicQuizDetail/TopicQuizDetail";
import Blogs from "./pages/blogs/Blogs";
import NotFound from "./components/notFound/NotFound";
import Statistics from "./pages/statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // loader: rootLoader,
        errorElement: <NotFound />,
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
            {
                path: "/statistics",
                loader: loadAllQuiz,
                element: <Statistics />,
            },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
