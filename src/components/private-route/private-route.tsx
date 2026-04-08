import { AuthStatus } from '../../constants/constants';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type PrivateRouteProps = {
  restrictedFor: AuthStatus;
  redirectedTo: string;
  children: ReactNode;
};

export default function PrivateRoute({
  restrictedFor,
  redirectedTo,
  children,
}: PrivateRouteProps) {
  const authStatus = useSelector((state: RootState) => state.user.authorizationStatus);

  return authStatus === restrictedFor ? <Navigate to={redirectedTo} /> : children;
}
