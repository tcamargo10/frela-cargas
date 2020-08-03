import React, { useState } from "react";
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

    const handleConfirm = () => {
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
            if (password1 !== password2) {
                alert("Cadastro confirmado!");
            } else {
                alert("Senhas");
            }
        } else {
            alert("Preecha todos os campos corretamente!");
        }
    };

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
                <TextInput
                    placeholder="Telefone Fixo"
                    keyboardType={"phone-pad"}
                    value={fixo}
                    onChangeText={text => setFixo(text)}
                />
                <TextInput
                    placeholder="Whatsapp"
                    keyboardType={"phone-pad"}
                    value={whatsapp}
                    onChangeText={text => setWhatsapp(text)}
                />
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
                <TextInput
                    placeholder="Endereço"
                    value={endereco}
                    onChangeText={text => setEndereco(text)}
                />
                <Button
                    style={{ marginBottom: 60, marginTop: 30 }}
                    onPress={() => {
                        handleConfirm;
                    }}
                >
                    Entrar
                </Button>
            </FormArea>
        </Container>
    );
};

export default Register;
