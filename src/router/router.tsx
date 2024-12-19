import { createHashRouter } from "react-router";
import App from '../view/App';
import CreateStudent from '../view/CreateStudent'

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path:"/create",
        element:<CreateStudent />
    }
])