// React
import { ReactNode } from "react";
// React Router DOM
import { Navigate } from "react-router-dom";
// Redux Toolkit
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  TUser,
  logOut,
  selectCurrentAuthStates,
} from "../redux/features/auth/authSlice";
// Utils
import { verifyToken } from "../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
};

function ProtectedRoute({ children }: TProtectedRoute) {
  const { token, user } = useAppSelector(selectCurrentAuthStates);
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to="/landing" replace={true} />;
  }

  const userInfo = verifyToken(token) as TUser;

  if (userInfo.email != user?.email || userInfo.id != user.id) {
    dispatch(logOut());
    return <Navigate to="/landing" replace={true} />;
  }

  return children;
}

export default ProtectedRoute;
