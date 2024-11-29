import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import TeamPage from "./pages/team";
import TeamDetailsPage from "./pages/team-details";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index path="/" element={<Navigate to="/home" />} />
                <Route index path="/home" element={<HomePage />} />
                <Route index path="/team" element={<TeamPage />} />
                <Route path="/team/:id" element={<TeamDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
