import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "@/presentation/router/ProtectedRoute";
import Dashboard from "@/presentation/pages/Dashboard";
import Login from "@/presentation/pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
