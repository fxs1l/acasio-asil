import { Link } from "react-router";
import LoginForm from "../../components/login-form";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-neutral">
            <div className="card bg-base-100 shadow-xl p-10 flex flex-col md:flex-row items-start">
                <div className="p-10 flex flex-col items-center justify-center h-full gap-2">
                    <h1 className="text-4xl font-bold">Seminar Reservation</h1>
                    <p>Find and book seminars near you!</p>
                </div>
                <div className="divider md:divider-horizontal" />

                <div className="w-full md:w-auto gap-1">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <div className="divider divider-accent w-10 mt-0"></div>
                    <LoginForm />
                    <div className="py-3 w-full flex items-center justify-center">
                        <Link to="/auth/register" className="link">
                            No account?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
