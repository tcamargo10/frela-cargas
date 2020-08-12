import React, { useRef, useCallback } from "react";
import { TextInput, Alert, AsyncStorage } from "react-native"
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import api from '../../utils/api';
import { useNavigation } from "@react-navigation/native"

import Input from "../../components/Input";
import Button from "../../components/Button";

import getValidationErros from "../../utils/getValidationErros";

import { Container, Title, FormSignIn, Logo, AreaRegister, Register } from "./styles";

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

                await api.post("/user/login", {email: data.email, password: data.password}).then(function (response) {
                    if(response.data.token)
                    {
                        const storeData = async () => {
                        try {
                            await AsyncStorage.setItem(
                              'token',
                              response.data.token
                            );
                            navigation.navigate("Dashboard");
                          } catch (error) {
                            Alert.alert("Erro ao autenticar", "Confira seus dados e tente novamente");
                          }
                        }
                        storeData();
                    } else {
                        Alert.alert("Erro", response.data.err);
                    }
                }).catch(error => {
                    console.log(error)
                })
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
            <Logo
                source={require("../../../assets/logo.png")}
                resizeMode="contain"
            />
            
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
            <AreaRegister onPress={() => navigation.navigate("Register")}>
                <Register>Ainda não tenho cadastro.</Register>
            </AreaRegister>
        </Container>
    );
};

export default SignIn;
