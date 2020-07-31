import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconFA from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import dados from "./dados.json";

import {
    Container,
    ProductsList,
    ProductContainer,
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
    Header,
    ActionButton,
    Logo,
} from "./styles";

export interface Product {
    _id: number;
    sku: string;
    quantidade?: number;
    preco: number;
    vendedor: number;
    coleta: string;
    destino: string;
    imagem: string;
    ativo?: boolean;
}

const Dashboard: React.FC = () => {
    const navigation = useNavigation();
    const [loading, setloading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const numColumns = 1;

    useEffect(() => {
        setProducts(dados);
        setloading(false);
    }, []);

    return (
        <Container>
            <Header>
                <ActionButton>
                    <IconFA name="chevron-left" size={20} color={"white"} />
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

            {!loading ? (
                <ProductsList
                    data={products}
                    keyExtractor={item => item._id}
                    numColumns={numColumns}
                    renderItem={({ item }: { item: products }) => (
                        <ProductContainer
                            onPress={() => navigation.navigate("Details")}
                        >
                            <ProductInfo>
                                <AreaName>
                                    <ProductName>{item.titulo}</ProductName>
                                </AreaName>
                                <ContainerAdress>
                                    <AreaAdress>
                                        <TitleAddress>Origem</TitleAddress>
                                        <ProductColeta>
                                            {`${item.partida.estado} - ${
                                                item.partida.cidade
                                            }`}
                                        </ProductColeta>
                                        <ProductColeta>
                                            {item.partida.endereco}
                                        </ProductColeta>
                                    </AreaAdress>
                                    <AreaAdress>
                                        <TitleAddress>Destino</TitleAddress>
                                        <ProductDestino>
                                            {`${item.destino.estado} - ${
                                                item.destino.cidade
                                            }`}
                                        </ProductDestino>
                                        <ProductDestino>
                                            {item.destino.endereco}
                                        </ProductDestino>
                                    </AreaAdress>
                                </ContainerAdress>
                                <ProductMeta>
                                    <ProductMetaPrice>
                                        {`R$ ${item.preco}`}
                                    </ProductMetaPrice>
                                </ProductMeta>
                            </ProductInfo>
                        </ProductContainer>
                    )}
                />
            ) : (
                <ActivityIndicator size="large" color="#ddd" />
            )}
        </Container>
    );
};

export default Dashboard;
