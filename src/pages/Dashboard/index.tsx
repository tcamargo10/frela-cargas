import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconFA from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";
import dados from "./dados.json";
import Button from "../../components/Button";

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
    Area,
    TextInput,
    AreaFiltro,
    BoxInfo,
    TitleFiltro,
    TextLogo,
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
    const [partestado, setPartEstado] = useState("");
    const [partcidade, setPartCidade] = useState("");
    const [destestado, setDestEstado] = useState("");
    const [destcidade, setDestCidade] = useState("");
    const [showfilter, setShowFilter] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const numColumns = 1;

    useEffect(() => {
        setProducts(dados);
        setloading(false);
    }, []);

    const handlesearch = () => {
        setShowFilter(!showfilter);
    };

    return (
        <Container>
            <Header>
                <ActionButton>
                    <IconFA
                        name="chevron-left"
                        size={30}
                        color={"transparent"}
                    />
                </ActionButton>
                <ActionButton>
                    {/*<Logo
                        source={require("../../../assets/logo.png")}
                        resizeMode="contain"
                    />*/}
                    <TextLogo>Senatran</TextLogo>
                </ActionButton>
                <ActionButton onPress={() => navigation.navigate("NewPost")}>
                    <IconFeather name="plus" size={30} color={"white"} />
                </ActionButton>
            </Header>

            <BoxInfo onPress={() => setShowFilter(!showfilter)}>
                <IconFeather name="filter" size={25} color={"white"} />
                <TitleFiltro>Pesquise anuncios por região</TitleFiltro>
            </BoxInfo>

            {showfilter && (
                <AreaFiltro>
                    <Area>
                        <TextInput
                            placeholder="Estado de Origem"
                            value={partestado}
                            onChangeText={text => setPartEstado(text)}
                        />
                        <TextInput
                            placeholder="Cidade de Origem"
                            value={partcidade}
                            onChangeText={text => setPartCidade(text)}
                        />
                    </Area>

                    <Area>
                        <TextInput
                            placeholder="Estado de Destino"
                            value={destestado}
                            onChangeText={text => setDestEstado(text)}
                        />
                        <TextInput
                            placeholder="Cidade de Destino"
                            value={destcidade}
                            onChangeText={text => setDestCidade(text)}
                        />
                    </Area>

                    <Button
                        style={{
                            marginBottom: 20,
                            marginTop: 10,
                            width: "50%",
                            alignItems: "center",
                        }}
                        onPress={handlesearch}
                    >
                        Pesquisar
                    </Button>
                </AreaFiltro>
            )}

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
