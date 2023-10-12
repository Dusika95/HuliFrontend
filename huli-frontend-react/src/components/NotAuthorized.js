import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function NotAuthorized({ isAdmin, user }) {
    const [login, setLogin] = useState(false);
    if (login) {
        return <Navigate to="/login" />
    }

    return (
        <div className="form-container">
            <div>
                <h3 className="noPage">You're not authorized to access this page.</h3>
            </div>
        </div>
    )
}