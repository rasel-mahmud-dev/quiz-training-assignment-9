import HomePage, { loadAllQuiz } from "./pages/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

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
        ],
    },
]);

export default () => <RouterProvider router={router} />;
