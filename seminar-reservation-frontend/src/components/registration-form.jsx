import { useState } from "react";
import { useNavigate } from "react-router";
import { IoEye, IoEyeOff } from "react-icons/io5";

import AuthService from "../services/auth";

export default function RegistrationForm() {
    const { register } = AuthService;

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(null);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError(null);
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        console.log(firstName, lastName, email, password, confirmPassword);
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            setDisabled(false);
            return;
        }
        // Handle registration
        const response = await register({
            firstName,
            lastName,
            email,
            password,
        });
        if (response.status === 201) {
            console.log("Registration successful");
            // TODO show success toast
            navigate("/auth/login");
        } else {
            console.log(response);
            setError(response.data.error);
        }

        setDisabled(false);
    };

    const handlePasswordInputChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleConfirmPasswordInputChange = (e) => {
        e.preventDefault();
        setConfirmPassword(e.target.value);
    };

    return (
        <form
            className="flex flex-col md:flex-row gap-4 items-center justify-center w-full"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="fname" className="flex-col flex  w-full">
                    First Name
                </label>
                <input
                    id="fname"
                    type="text"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
                <label htmlFor="lname" className="flex-col flex  w-full">
                    Last Name
                </label>
                <input
                    id="lname"
                    type="text"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
            </div>
            <div className="divider divider-horizontal" />
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="flex-col flex  w-full">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
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
                            error || passwordError ? "input-error" : ""
                        }`}
                        required
                        disabled={disabled}
                        value={password}
                        onChange={handlePasswordInputChange}
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
                <label htmlFor="confirm">Confirm Password</label>
                <div className="flex-col flex relative w-full">
                    <input
                        id="confirm"
                        type={showPassword ? "text" : "password"}
                        className={`input input-bordered max-x-xs ${
                            error || passwordError ? "input-error" : ""
                        }`}
                        required
                        disabled={disabled}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordInputChange}
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
                    className="btn btn-accent mt-2"
                    type="submit"
                    disabled={disabled}
                >
                    Create account
                </button>
            </div>
        </form>
    );
}
