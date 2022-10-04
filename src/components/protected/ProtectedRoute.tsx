import {Redirect, Route, RouteProps} from "react-router-dom";

interface ILayoutProps {
    path: RouteProps["path"];
    children: RouteProps["children"];
}

const PrivateRoute = ({children, ...rest}: ILayoutProps) => {

    const json_access = localStorage.getItem('access');
    const access: boolean = json_access && JSON.parse(json_access);

    return (
        <Route
            {...rest}
            render={({location}): any =>
                access ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute



