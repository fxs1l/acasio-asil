import React, { createContext, useContext, useState } from "react";

// Auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// Hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
