import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/auth-provider";

export default function AuthLayout() {
    const { user, token } = useAuth();
    const isAdmin = user?.role === "admin";

    useEffect(() => {
        console.log("Myh token is: ", token);
        console.log("My user is: ", user);
    }, [token, user]);

    if (!user || !token) return <Navigate to="/auth/login" />;
    return <Outlet />;
}
