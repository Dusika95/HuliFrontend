import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ user, roles = [], permissions = [], redirectPath = '/not-authorized', children }) {
  const isAuthorized = user !== null && (roles.includes(user.role) || permissions.some(permission => user.permissions.includes(permission)));

  return isAuthorized ? (
    children
  ) : (
    <Navigate to={redirectPath} replace />
  );
}