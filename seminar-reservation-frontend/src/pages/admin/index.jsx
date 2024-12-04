import { IoMenu } from "react-icons/io5";
import NavBar from "../../components/navbar";
import { useAuth } from "../../providers/auth-provider";

import SeminarForm from "../../components/seminar-form";

export default function AdminPage() {
    const { user, token } = useAuth();
    return (
        <div className="max-h-screen">
            <NavBar />
            <div className="drawer h-full">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* <h1 className="text-2xl self-start p-5 shadow-xl">
                        Hi, {user.name}! What would you like to do today?
                    </h1> */}
                    <div className="flex flex-col gap-4 p-5">
                        <div className="card bg-base-200 shadow-xl w-full">
                            {/* <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure> */}
                            <div className="card-body">
                                <h2 className="card-title">Seminars</h2>
                                <p>Create seminars.</p>
                                {/* <div className="card-actions">
                                    <button className="btn btn-primary">
                                        Manage Seminars
                                    </button>
                                    <button className="btn btn-secondary">
                                        Create Seminar
                                    </button>
                                </div> */}
                                <SeminarForm />
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-xl w-full">
                            {/* <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure> */}
                            <div className="card-body">
                                <h2 className="card-title">Bookings</h2>
                                <p>Create and approve bookings</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Manage Bookings
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-xl w-full">
                            {/* <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure> */}
                            <div className="card-body">
                                <h2 className="card-title">Insights</h2>
                                <p>Create and approve bookings</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        View insights
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <a>Bookings</a>
                        </li>
                        <li>
                            <a>Seminars</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
