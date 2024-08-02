import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout;