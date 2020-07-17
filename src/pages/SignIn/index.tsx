import React, { useRef, useCallback } from "react";
import { TextInput, Alert } from "react-native"
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native"

import Input from "../../components/Input";
import Button from "../../components/Button";

import getValidationErros from "../../utils/getValidationErros";

import { Container, Title, FormSignIn } from "./styles";

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null)
    const navigation = useNavigation()

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required("Digite seu email")
                        .email("Digite um email válido"),
                    password: Yup.string().required("Digite sua senha"),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });
                if(data.email === "admin@admin.com" && data.password === "123456"){
                    navigation.navigate("Dashboard")
                }
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const erros = getValidationErros(err);
                    formRef.current?.setErrors(erros);
                    return;
                }
                Alert.alert("Erro ao autenticar", "Confira seus dados e tente novamente")
            }
        },
        [],
    );

    return ( 
        <Container>
            <Title>Faça seu Login</Title>
            <FormSignIn ref={formRef} onSubmit={handleSubmit}>
                <Input 
                    name="email" 
                    icon="mail" 
                    placeholder="E-mail" 
                    autoCorrect={false} 
                    autoCapitalize="none"
                    keyboardType="email-address" 
                    returnKeyType="next"
                    onSubmitEditing={()=>{
                        passwordInputRef.current?.focus
                    }} />
                <Input 
                    ref={passwordInputRef}
                    name="password" 
                    icon="lock" 
                    placeholder="Senha"
                    secureTextEntry
                    returnKeyType="send"
                    onSubmitEditing={()=>formRef.current?.submitForm()} />
                <Button onPress={()=>formRef.current?.submitForm()}>Entrar</Button>
            </FormSignIn>
        </Container>
    );
};

export default SignIn;
