import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelector } from "../Store/Auth/selectors";
import { ROUTES } from "./constants";

export const PrivateRoute = ({ ...rest }) => {
    const authenticated = useSelector(authSelector);

    return authenticated ? (
        <Route {...rest} />
    ) : (
        <Redirect to={ROUTES.SIGN_UP} />
    );
};
