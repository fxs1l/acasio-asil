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

        setDisabled(false);
    };

    return (
        <form
            className="flex flex-col gap-4 p-4 border rounded-md"
            onSubmit={handleSubmit}
        >
            <label className="flex-col flex w-full gap-1">
                Title
                <input
                    id="text"
                    type="text"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
            </label>
            <label className="flex-col flex w-full gap-1">
                Description
                <input
                    id="description"
                    type="text"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
            </label>
            <label className="flex-col flex w-full gap-1">
                Date
                <input
                    id="date"
                    type="date"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
            </label>
            <div className="flex-row flex w-full justify-start gap-2">
                <label className="flex flex-row gap-2 items-center">
                    From
                    <input
                        id="fromTime"
                        type="time"
                        className={`input input-bordered max-x-xs ${
                            error ? "input-error" : ""
                        }`}
                        required
                        disabled={disabled}
                    />
                </label>
                <label className="flex flex-row gap-2 items-center">
                    To
                    <input
                        id="toTime"
                        type="time"
                        className={`input input-bordered max-x-xs ${
                            error ? "input-error" : ""
                        }`}
                        required
                        disabled={disabled}
                    />
                </label>
            </div>
            <label className="flex-col flex w-full gap-1">
                Venue
                <input
                    id="venue"
                    type="text"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
            </label>
            <div className="flex flex-col gap-2 rounded-sm ">
                Speaker Details
                <label className="flex-col flex w-full gap-1 pl-4">
                    Name
                    <input
                        id="speaker"
                        type="text"
                        className={`input input-bordered max-x-xs ${
                            error ? "input-error" : ""
                        }`}
                        required
                        disabled={disabled}
                    />
                </label>
                <label className="flex-col flex w-full gap-1 pl-4">
                    Image filename
                    <input
                        id="image"
                        type="text"
                        className={`input input-bordered max-x-xs ${
                            error ? "input-error" : ""
                        }`}
                        required
                        disabled={disabled}
                    />
                </label>
                <label className="flex-col flex w-full gap-1 pl-4">
                    LinkedIn
                    <input
                        id="linkedin"
                        type="text"
                        className={`input input-bordered max-x-xs ${
                            error ? "input-error" : ""
                        }`}
                        required
                        disabled={disabled}
                    />
                </label>
            </div>
            <label className="flex-col flex w-full gap-1">
                Fee ($)
                <input
                    id="fee"
                    type="number"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
            </label>
            <label className="flex-col flex w-full gap-1">
                Slots Available
                <input
                    id="slots"
                    min={0}
                    type="number"
                    className={`input input-bordered max-x-xs ${
                        error ? "input-error" : ""
                    }`}
                    required
                    disabled={disabled}
                />
            </label>

            {error && <p className="text-error">{error}</p>}
            <button
                className="btn btn-accent"
                type="submit"
                disabled={disabled}
            >
                Create Seminar
            </button>
        </form>
    );
}
