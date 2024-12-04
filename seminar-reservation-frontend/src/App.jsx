import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegistrationPage from "./pages/auth/register";
import AuthProvider from "./providers/auth-provider";
import AuthLayout from "./layouts/auth-layout";
import AdminPage from "./pages/admin/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    const theme = "light";
    useEffect(() => {
        console.log("Theme is: ", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/auth">
                        <Route path="register" element={<RegistrationPage />} />
                        <Route path="login" element={<LoginPage />} />
                    </Route>
                    <Route path="/" element={<AuthLayout />}>
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/home" element={<h1>home page</h1>} />
                    </Route>
                    <Route path="/*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </Router>
            <ToastContainer theme="dark" />
        </AuthProvider>
    );
}
