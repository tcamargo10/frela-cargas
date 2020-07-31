import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconFA from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";

import { Container, Header, ActionButton, Logo } from "./styles";

const Register: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <ActionButton onPress={() => navigation.goBack()}>
                    <IconFA name="chevron-left" size={20} />
                </ActionButton>
                <ActionButton>
                    <Logo
                        source={require("../../../assets/logo.png")}
                        resizeMode="contain"
                    />
                </ActionButton>
                <ActionButton>
                    <IconEntypo
                        name="dots-three-vertical"
                        size={20}
                        color={"white"}
                    />
                </ActionButton>
            </Header>
        </Container>
    );
};

export default Register;
