import { Link } from "react-router";
import RegistrationForm from "../../components/registration-form";

export default function RegistrationPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-neutral">
            <div className="card bg-base-100 shadow-xl p-10 flex items-start">
                <div className="w-full gap-1 ">
                    <h1 className="text-2xl font-bold">Create Your Account</h1>
                    <div className="divider divider-accent w-10 mt-0"></div>
                    <RegistrationForm />
                    <div className="py-3 w-full flex items-center justify-center">
                        <Link to="/auth/login" className="link">
                            Already have an account?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
