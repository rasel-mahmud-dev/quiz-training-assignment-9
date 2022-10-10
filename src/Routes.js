import HomePage from "./pages/homePage/HomePage";
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
                // loader: teamLoader,
            },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
