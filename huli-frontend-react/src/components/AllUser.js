import { useDeleteUser, useAllUser } from "../hooks/user-hooks";
import User from "./User";

export default function AllUser() {

    const { users, refreshUsers, isLoading: isFetchingUser } = useAllUser();
    const { deleteUser, isLoading: isDeletingUser } = useDeleteUser();

    const handleDelete = (user) => {
        deleteUser(user).then(() => {
            refreshUsers();
        })
            .catch((error) => {
                console.error("Error editing meeting room:", error);
            });
    }

    return (
        <div className="all-users">
            {users.length === 0 ? (
                <p className='message'>No users yet.</p>
            ) : (
                <div className="users">
                    {users.map((user) => (
                        <User key={user.id} user={user} onDelete={handleDelete} />

                    ))}
                </div>
            )}
        </div>
    )
}
