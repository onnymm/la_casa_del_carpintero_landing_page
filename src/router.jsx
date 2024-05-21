import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Locations from "./routes/locations";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/sucursales",
                    element: <Locations />
                }
            ]
        }
    ]
)

export default router;