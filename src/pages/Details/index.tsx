import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import proddetails from "./proddetails.json";
import IconFA from "react-native-vector-icons/FontAwesome5";
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
    Empresa,
    AreaTel,
    Fixo,
    Whats,
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

    useEffect(() => {
        setDetails(proddetails);
    }, []);

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
                    <IconEntypo name="dots-three-vertical" size={20} />
                </ActionButton>
            </Header>

            <Contain>
                <ClienteInfo>
                    <Nome />
                    <Empresa />
                    <AreaTel>
                        <Fixo />
                        <Whats />
                    </AreaTel>
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
                                    detalis.partida.cidade
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
            </Contain>
        </Container>
    );
};

export default Details;
