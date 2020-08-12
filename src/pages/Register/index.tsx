import React, { useState } from "react";
import { Alert } from "react-native";
import api from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import IconFA from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import Button from "../../components/Button";

import {
    Container,
    Header,
    ActionButton,
    Logo,
    FormArea,
    Titulo,
    TextInput,
    Area,
    TextLogo,
} from "./styles";

export interface Cadastro {
    nomeDaEmpresa: string;
    name: string;
    email: string;
    password1: string;
    password2: string;
    fixo: string;
    whatsapp: string;
    estado: number;
    cidade: number;
    endereco: string;
}

const Register: React.FC = () => {
    const navigation = useNavigation();

    const [empresa, setEmpresa] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [fixo, setFixo] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");

    const handleConfirm = async () => {
        if (
            empresa !== "" &&
            name !== "" &&
            email !== "" &&
            password1 !== "" &&
            password2 !== "" &&
            fixo !== "" &&
            whatsapp !== "" &&
            estado !== "" &&
            cidade !== "" &&
            endereco !== ""
        ) {
            if (fixo.length > 9 && whatsapp.length > 9) {
                if (password1 == password2) {
                    await api
                        .post("/user/create", {
                            name: name,
                            email: email,
                            password: password1,
                            nomeDaEmpresa: empresa,
                            telefone: {
                                fixo: fixo,
                                whatsapp: whatsapp,
                            },
                            localizacao: {
                                estado: estado,
                                cidade: cidade,
                                endereco: endereco,
                            },
                        })
                        .then(function(response) {
                            if (response.data.err) {
                                Alert.alert("Erro", response.data.err);
                            } else {
                                Alert.alert("Sucesso", "Cadastro realizado!");
                                navigation.navigate("SignIn");
                            }
                        })
                        .catch(error => {
                            Alert.alert("Erro", error);
                        });
                } else {
                    Alert.alert("Senha", "Senhas precisam ser iguais!");
                }
            } else {
                Alert.alert("Atenção", "Telefone/Whatsapp invalido!");
            }
        } else {
            Alert.alert("Atenção", "Preecha todos os campos corretamente!");
        }
    };

    return (
        <Container>
            <Header>
                <ActionButton onPress={() => navigation.goBack()}>
                    <IconFA name="chevron-left" size={20} color={"white"} />
                </ActionButton>
                <ActionButton>
                    {/*<Logo
                        source={require("../../../assets/logo.png")}
                        resizeMode="contain"
                    />*/}
                    <TextLogo>Senatran</TextLogo>
                </ActionButton>
                <ActionButton>
                    <IconEntypo
                        name="dots-three-vertical"
                        size={20}
                        color={"transparent"}
                    />
                </ActionButton>
            </Header>

            <FormArea>
                <Titulo>Registre-se:</Titulo>

                <TextInput
                    placeholder="Empresa"
                    value={empresa}
                    onChangeText={text => setEmpresa(text)}
                />
                <TextInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Area>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Senha"
                        value={password1}
                        onChangeText={text => setPassword1(text)}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Repita a senha"
                        value={password2}
                        onChangeText={text => setPassword2(text)}
                    />
                </Area>
                <Area>
                    <TextInput
                        placeholder="Telefone Fixo com DDD"
                        keyboardType={"phone-pad"}
                        value={fixo}
                        onChangeText={text => setFixo(text)}
                    />
                    <TextInput
                        placeholder="Whatsapp com DDD"
                        keyboardType={"phone-pad"}
                        value={whatsapp}
                        onChangeText={text => setWhatsapp(text)}
                    />
                </Area>
                <Area>
                    <TextInput
                        placeholder="Estado"
                        value={estado}
                        onChangeText={text => setEstado(text)}
                    />
                    <TextInput
                        placeholder="Cidade"
                        value={cidade}
                        onChangeText={text => setCidade(text)}
                    />
                </Area>
                <TextInput
                    placeholder="Endereço"
                    value={endereco}
                    onChangeText={text => setEndereco(text)}
                />
                <Button
                    style={{ marginBottom: 50, marginTop: 10 }}
                    onPress={handleConfirm}
                >
                    Entrar
                </Button>
            </FormArea>
        </Container>
    );
};

export default Register;
