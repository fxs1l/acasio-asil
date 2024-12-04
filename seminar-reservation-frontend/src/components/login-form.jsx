import { useState } from "react";
import { useNavigate } from "react-router";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

import AuthService from "../services/auth";
import { useAuth } from "../providers/auth-provider";

export default function LoginForm() {
    const { login } = AuthService;
    const { setUser, setToken } = useAuth();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(null);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError(null);
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response = await login({ email, password });

        if (response.status === 200) {
            const { token, user } = response.data;
            const isAdmin = user.role === "admin";
            toast.success("Login successful");
            setError(null);
            setUser(user);
            localStorage.setItem("token", token);
            setToken(token);
            if (isAdmin) navigate("/admin");
            else navigate("/home");
        } else {
            console.log(response);
            setError(response.data.error);
            toast.error(response.data.error);
        }
        setDisabled(false);
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="email" className="flex-col flex  w-full">
                Email
            </label>
            <input
                id="email"
                type="email"
                placeholder="email@example.com"
                className={`input input-bordered max-x-xs ${
                    error ? "input-error" : ""
                }`}
                required
                disabled={disabled}
            />
            <label htmlFor="password">Password</label>
            <div className="flex-col flex relative w-full">
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
                <button
                    className="w-10 h-10 absolute right-0 top-1/2 transform -translate-y-1/2"
                    onClick={handleShowPassword}
                >
                    {showPassword && !disabled ? (
                        <IoEye className="border-white/20 border-l-2 w-full" />
                    ) : (
                        <IoEyeOff className="border-white/20 border-l-2 w-full" />
                    )}
                </button>
            </div>
            {error && <p className="text-error">{error}</p>}
            <button
                className="btn btn-accent"
                type="submit"
                disabled={disabled}
            >
                Login
            </button>
        </form>
    );
}
