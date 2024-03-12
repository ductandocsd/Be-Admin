import NotFound from "../pages/errors/404"
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import UserPage from "../pages/users";
import CostumeIndex from "../pages/costume";
import CostumeAdd from "../pages/costume/add";
import ClothesIndex from "../pages/clothes";
import Clothesadd from "../pages/clothes/add";
import FavouriteIndex from "../pages/favourite";


export const routes = () => {
    return [
        {
            path: "/",
            element: <UserPage />,
            index: true,
            exact: true
        },
        {
            path: "/nguoi-dung",
            element: <UserPage />,
        },
        {
            path: "/trang-phuc",
            element: <CostumeIndex />,
        },
        {
            path: "/trang-phuc-them-moi",
            element: <CostumeAdd />,
        },
        {
            path: "/ao-quan",
            element: <ClothesIndex />,
        },
        {
            path: "/them-moi-ao-quan",
            element: <Clothesadd/>,
        },
        {
            path: "/yeu-thich",
            element: <FavouriteIndex />,
        },
        {
            path: "/auth",
            children: [
                {
                    path: "login",
                    element: <LoginPage />,
                },
                {
                    path: "register",
                    element: <RegisterPage />,
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        },
    ]
}
