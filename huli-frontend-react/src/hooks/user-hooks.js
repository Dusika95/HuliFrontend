import { useState, useEffect } from "react";
import * as userService from "../services/user-service";
import { useNavigate } from "react-router-dom";

export const useRegisterUser = () => {
    const [isLoading, setIsLoading] = useState(false);

    const registerUser = async (user) => {
        setIsLoading(true);
        await userService.registerUser(user);
        setIsLoading(false);
    };
    return { registerUser, isLoading };
};

export const useAllUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        userService.allUser().then(users => {
            setUsers(users)
            setIsLoading(false)
        });
    }, [refresh]);

    const refreshUsers = () => {
        setRefresh(!refresh);
    };

    return { users, refreshUsers, isLoading }

}

export const useLoginUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const loginUser = (email, password, { setUser }, { setIsAdmin }) => {
        setIsLoading(true);
        if (validate(email, password)) {
            const userInfo = {
                email: email,
                password: password,
            }
            return userService
                .loginUser(userInfo)
                .then((data) => {
                    console.log(data);
                    if ('error' in data) {
                        alert('Invalid email or password.');
                    } else {
                        alert("Success");
                        const user = {
                            email: email,
                            role: data.role,
                            jwtToken: data.jwtToken,
                            id: data.id,
                            name: data.name,
                        };
                        sessionStorage.setItem('user', JSON.stringify(user));
                        setUser(user);
                        setIsAdmin(data.role === "admin");
                        if (data.role === "admin") {
                            navigate("/admin/users");
                        } else {
                            navigate("/");
                        }
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    alert('Login failed due to: ' + err.message);
                });
        }
        setIsLoading(false);
    };

    const validate = (email, password) => {
        if (email === "" || email === null || password === "" || password === null) {
            alert("All fields are required.");
            return false;
        } else {
            return true;
        }
    };
    return { loginUser, isLoading };
};

export const useDeleteUser = () => {
    const [isLoading, setIsLoading] = useState(false);

    const deleteUser = (user) => {

        if (user.role === "admin") {
            alert("Cannot delete a user with 'admin' role.")
            return;
        }
        setIsLoading(true);
        return userService
        .deleteUser(user.id)
        .then(()=>{
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error deleting user", error);
            setIsLoading(false);
          });
    };
    return { deleteUser, isLoading };
}