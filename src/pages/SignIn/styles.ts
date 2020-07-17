import styled from "styled-components/native";
import { Form } from "@unform/mobile";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: "RobotoSlab-Medium";
    margin: 0 0 24px 0;
`;

export const FormSignIn = styled(Form)`
    width: 100%;
    align-items: center;
    justify-content: center;
`;
