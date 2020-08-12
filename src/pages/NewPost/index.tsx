import React, { useState } from "react";
import { Alert } from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import api from "../../utils/api";

import {
    Container,
    Header,
    ActionButton,
    Logo,
    FormArea,
    Titulo,
    TextLogo,
    TextInput,
    SubTitle,
    Area,
    AreaGroup,
} from "./styles";

const NewPost: React.FC = () => {
    const navigation = useNavigation();

    const [titulo, setTitulo] = useState("");
    const [partestado, setPartEstado] = useState("");
    const [partcidade, setPartCidade] = useState("");
    const [partendereco, setPartEndereco] = useState("");
    const [destestado, setDestEstado] = useState("");
    const [destcidade, setDestCidade] = useState("");
    const [destendereco, setDestEndereco] = useState("");
    const [preco, setPreco] = useState("");

    const handleConfirm = async () => {
        if (
            titulo !== "" &&
            partestado !== "" &&
            partcidade !== "" &&
            partendereco !== "" &&
            destestado !== "" &&
            destcidade !== "" &&
            destendereco !== "" &&
            preco !== ""
        ) {
            await api
                .post("/anuncio", {
                    titulo: titulo,
                    preco: preco,
                    partida: {
                        estado: partestado,
                        cidade: partcidade,
                        endereco: partendereco,
                    },
                    destino: {
                        estado: destestado,
                        cidade: destcidade,
                        endereco: destendereco,
                    },
                })
                .then(function(response) {
                    if (response.data.err) {
                        Alert.alert("Erro", response.data.err);
                    } else {
                        Alert.alert("Sucesso", "Anuncio Cadastrado!");
                    }
                })
                .catch(error => {
                    Alert.alert("Erro", "Erro ao cadastrar novo anuncio!");
                });
        } else {
            Alert.alert("Atenção", "Preencha todos os campos!");
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
                <Titulo>Cadastre um anúncio: </Titulo>

                <TextInput
                    placeholder="Titulo"
                    value={titulo}
                    onChangeText={text => setTitulo(text)}
                />

                <AreaGroup>
                    <SubTitle>Endereço de Partida:</SubTitle>
                    <Area>
                        <TextInput
                            placeholder="Estado"
                            value={partestado}
                            onChangeText={text => setPartEstado(text)}
                        />
                        <TextInput
                            placeholder="Cidade"
                            value={partcidade}
                            onChangeText={text => setPartCidade(text)}
                        />
                    </Area>
                    <TextInput
                        placeholder="Endereco"
                        value={partendereco}
                        onChangeText={text => setPartEndereco(text)}
                    />
                </AreaGroup>

                <AreaGroup>
                    <SubTitle>Endereço de Destino:</SubTitle>
                    <Area>
                        <TextInput
                            placeholder="Estado"
                            value={destestado}
                            onChangeText={text => setDestEstado(text)}
                        />
                        <TextInput
                            placeholder="Cidade"
                            value={destcidade}
                            onChangeText={text => setDestCidade(text)}
                        />
                    </Area>
                    <TextInput
                        placeholder="Endereço"
                        value={destendereco}
                        onChangeText={text => setDestEndereco(text)}
                    />
                </AreaGroup>
                <TextInput
                    placeholder="Valor"
                    value={preco}
                    onChangeText={text => setPreco(text)}
                />
                <Button
                    style={{ marginBottom: 60, marginTop: 30 }}
                    onPress={() => {
                        handleConfirm;
                    }}
                >
                    Cadastrar
                </Button>
            </FormArea>
        </Container>
    );
};

export default NewPost;
