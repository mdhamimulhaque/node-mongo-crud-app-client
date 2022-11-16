import { createBrowserRouter } from "react-router-dom";
import CreateUser from "../components/CreateUser/CreateUser";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import Users from "../components/Users/Users";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/create-user",
                element: <CreateUser />
            },
            {
                path: "/update-user/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
                element: <UpdateUser />
            }
        ]
    }
])

export default router;