import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Register from "../pages/Register";

const Auth = createStackNavigator();
const AuthRoutes: React.FC = () => {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {},
            }}
        >
            <Auth.Screen name="SignIn" component={SignIn} />
            <Auth.Screen name="Dashboard" component={Dashboard} />
            <Auth.Screen name="Details" component={Details} />
            <Auth.Screen name="Register" component={Register} />
        </Auth.Navigator>
    );
};

export default AuthRoutes;
