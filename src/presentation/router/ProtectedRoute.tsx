import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import type {RootState} from "@/shared/store";
import type {JSX} from "react";

interface ProtectedRouteProps {
    children: JSX.Element;
}

export default function ProtectedRoute({children}: ProtectedRouteProps) {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const { role } = useSelector((state: RootState) => state.user);

    if (!isAuthenticated || role !== "ADMIN") {
        return <Navigate to="/login" replace />;
    }

    return children;
}
