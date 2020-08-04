import styled from "styled-components/native";
import { Form } from "@unform/mobile";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 0 30px;
    background-color: #033249;
`;

export const Logo = styled.Image`
    height: 180px;
    width: 180px;
    margin-bottom: 20px;
    margin-top: 80px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: "RobotoSlab-Medium";
    color: white;
    margin: 0 0 24px 0;
`;

export const FormSignIn = styled(Form)`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const AreaRegister = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 10px;
`;

export const Register = styled.Text`
    font-size: 15px;
    color: #ddd;
`;
