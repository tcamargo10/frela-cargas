import React, { useState, useEffect } from "react";
import { ActivityIndicator, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import proddetails from "./proddetails.json";
import IconFA from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";

import {
    Container,
    Header,
    ActionButton,
    Logo,
    ProductInfo,
    ProductMeta,
    ProductName,
    ProductMetaPrice,
    ContainerAdress,
    ProductColeta,
    ProductDestino,
    AreaAdress,
    TitleAddress,
    AreaName,
    Contain,
    ClienteInfo,
    Nome,
    Boxdata,
    Empresa,
    AreaTel,
    Fixo,
    Whats,
    Boxtel,
    Criado,
    Expira,
} from "./styles";

export interface Product {
    _id: number;
    name: string;
    nomeDaEmpresa: string;
    fixo: string;
    whatsapp: string;
    quantidade?: number;
    preco: number;
    vendedor: number;
    coleta: string;
    destino: string;
    imagem: string;
    ativo?: boolean;
}

const Details: React.FC = () => {
    const navigation = useNavigation();
    const [details, setDetails] = useState<Product[]>([]);
    const [loading, setloading] = useState(true);

    const mensagemwhatsapp =
        "Ola,%20vi%20seu%20anuncio%20no%20App%20MinhaCarga";

    useEffect(() => {
        setDetails(proddetails);
        setloading(false);
    }, []);

    return (
        <Container>
            <Header>
                <ActionButton onPress={() => navigation.goBack()}>
                    <IconFA name="chevron-left" size={15} />
                </ActionButton>
                <ActionButton>
                    <Logo
                        source={require("../../../assets/logo.png")}
                        resizeMode="contain"
                    />
                </ActionButton>
                <ActionButton>
                    <IconEntypo name="dots-three-vertical" size={20} />
                </ActionButton>
            </Header>

            <Contain>
                {!loading ? (
                    <>
                        <ClienteInfo>
                            <Nome>{details.name}</Nome>
                            <Empresa>{details.nomeDaEmpresa}</Empresa>
                            <Boxdata>
                                <IconFA name="play" size={20} />
                                <Criado>
                                    Criado em:{" "}
                                    {details.criadoEm.substring(0, 10)}
                                </Criado>
                            </Boxdata>
                            <Boxdata>
                                <IconFA name="hourglass-start" size={20} />
                                <Expira>
                                    Expira em:{" "}
                                    {details.expiraEm.substring(0, 10)}
                                </Expira>
                            </Boxdata>
                        </ClienteInfo>
                        <ProductInfo>
                            <AreaName>
                                <ProductName>{details.titulo}</ProductName>
                            </AreaName>
                            <ContainerAdress>
                                <AreaAdress>
                                    <TitleAddress>Origem</TitleAddress>
                                    <ProductColeta>
                                        {`${details.partida.estado} - ${
                                            details.partida.cidade
                                        }`}
                                    </ProductColeta>
                                    <ProductColeta>
                                        {details.partida.endereco}
                                    </ProductColeta>
                                </AreaAdress>
                                <AreaAdress>
                                    <TitleAddress>Destino</TitleAddress>
                                    <ProductDestino>
                                        {`${details.destino.estado} - ${
                                            details.destino.cidade
                                        }`}
                                    </ProductDestino>
                                    <ProductDestino>
                                        {details.destino.endereco}
                                    </ProductDestino>
                                </AreaAdress>
                            </ContainerAdress>
                            <ProductMeta>
                                <ProductMetaPrice>
                                    {`R$ ${details.preco}`}
                                </ProductMetaPrice>
                            </ProductMeta>
                        </ProductInfo>
                        <AreaTel>
                            <Boxtel
                                onPress={() => {
                                    Linking.openURL(
                                        `tel:${details.telefone.fixo}`,
                                    );
                                }}
                            >
                                <IconFA name="phone" size={30} />
                                <Fixo>
                                    {`(${details.telefone.fixo.substring(
                                        0,
                                        2,
                                    )}) ${details.telefone.fixo.substring(
                                        2,
                                        6,
                                    )}-${details.telefone.fixo.substring(
                                        6,
                                        12,
                                    )}`}
                                </Fixo>
                            </Boxtel>
                            <Boxtel
                                onPress={() =>
                                    Linking.openURL(
                                        `https://wa.me/${
                                            details.telefone.whatsapp
                                        }?text=${mensagemwhatsapp}`,
                                    )
                                }
                            >
                                <Icon
                                    name="whatsapp"
                                    size={30}
                                    color={"green"}
                                />
                                <Whats>
                                    {`(${details.telefone.whatsapp.substring(
                                        0,
                                        2,
                                    )}) ${details.telefone.whatsapp.substring(
                                        2,
                                        7,
                                    )}-${details.telefone.whatsapp.substring(
                                        7,
                                        12,
                                    )}`}
                                </Whats>
                            </Boxtel>
                        </AreaTel>
                    </>
                ) : (
                    <ActivityIndicator size="large" color="#ddd" />
                )}
            </Contain>
        </Container>
    );
};

export default Details;
