import React, { useEffect, useState } from "react";
import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoder";
import {
    Alert,
    AsyncStorage,
    ActivityIndicator,
    PermissionsAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconFA from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import api from "../../utils/api";
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
    Localizacao,
    TitleLocalizacao,
    ButtonLocalizacao,
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
    const [login, setLogin] = useState(false);
    const [partestado, setPartEstado] = useState("");
    const [partcidade, setPartCidade] = useState("");
    const [destestado, setDestEstado] = useState("");
    const [destcidade, setDestCidade] = useState("");
    const [showfilter, setShowFilter] = useState(false);
    const [hasLocationPermission, sethasLocationPermission] = useState(false);
    const [geoestado, setGeoEstado] = useState("");
    const [geocidade, setGeoCidade] = useState("");
    const [userPosition, setUserPosition] = useState({ lat: "", lng: "" });
    const [products, setProducts] = useState([]);
    const numColumns = 1;

    useEffect(() => {
        VerifyPermission();
        GetLocation();
    }, [hasLocationPermission]);

    useEffect(() => {
        async function getposts() {
            const token = await AsyncStorage.getItem("token");

            if (token) {
                setLogin(true);
            }

            await api
                .get("/anuncio/all")
                .then(function(response) {
                    if (response.data.err) {
                        Alert.alert("Erro", response.data.err);
                    } else {
                        setProducts(response.data);
                    }
                })
                .catch(error => {
                    Alert.alert("Erro", error);
                });

            setloading(false);
        }
        getposts();
    }, []);

    async function VerifyPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                sethasLocationPermission(true);
            } else {
                sethasLocationPermission(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handlemylocation = () => {
        if (userPosition.lat !== "") {
            Geocoder.geocodePosition(userPosition)
                .then(res => {
                    setGeoCidade(res[0].subAdminArea);
                    setGeoEstado(res[0].adminArea);

                    setPartEstado(res[0].subAdminArea);
                    setPartCidade(res[0].adminArea);
                })
                .catch(err => console.log(err));
        } else {
            Alert.alert("Erro", "Não foi possivel encontrar sua localização!");
        }
    };

    async function GetLocation() {
        if (hasLocationPermission) {
            await Geolocation.getCurrentPosition(
                position => {
                    setUserPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                error => {
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
            );
        }
    }

    const handlesearch = async () => {
        setShowFilter(!showfilter);
        setloading(true);

        if (
            destestado == "" &&
            destcidade == "" &&
            partestado == "" &&
            partcidade == ""
        ) {
            await api
                .get("/anuncio/all")
                .then(function(response) {
                    if (response.data.err) {
                        Alert.alert("Erro", response.data.err);
                    } else {
                        setProducts(response.data);
                    }
                })
                .catch(error => {
                    Alert.alert("Erro", error);
                });
        } else {
            await api
                .post("/anuncio", {
                    estadoDestino: destestado,
                    cidadeDestino: destcidade,
                    estadoPartida: partestado,
                    cidadePartida: partcidade,
                })
                .then(function(response) {
                    if (response.data.err) {
                        Alert.alert("Erro", response.data.err);
                    } else {
                        if (response.data.anunciosFiltrados) {
                            setProducts(response.data.anunciosFiltrados);
                        }
                    }
                })
                .catch(error => {
                    Alert.alert("Erro", error);
                });
        }

        setloading(false);
    };

    const handleNewPost = () => {
        if (login) {
            navigation.navigate("NewPost");
        } else {
            Alert.alert("Atenção", "Logue para criar um novo anuncio!");
            navigation.navigate("SignIn");
        }
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        setLogin(false);
        navigation.navigate("SignIn");
    };

    return (
        <Container>
            <Header>
                <ActionButton onPress={handleLogout}>
                    <IconSimple name="logout" size={23} color={"white"} />
                </ActionButton>
                <ActionButton>
                    {/*<Logo
                        source={require("../../../assets/logo.png")}
                        resizeMode="contain"
                    />*/}
                    <TextLogo>Senatran</TextLogo>
                </ActionButton>
                <ActionButton onPress={handleNewPost}>
                    <IconFeather name="plus" size={30} color={"white"} />
                </ActionButton>
            </Header>

            <BoxInfo onPress={() => setShowFilter(!showfilter)}>
                <IconFeather name="filter" size={25} color={"white"} />
                <TitleFiltro>Pesquise anuncios por região</TitleFiltro>
            </BoxInfo>

            {showfilter && (
                <AreaFiltro>
                    <ButtonLocalizacao onPress={handlemylocation}>
                        <TitleLocalizacao>
                            Utilizar minha localização
                        </TitleLocalizacao>
                    </ButtonLocalizacao>
                    <Localizacao>{`${geocidade} / ${geoestado}`}</Localizacao>

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
                            marginBottom: 10,
                            marginTop: 5,
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
                            onPress={() =>
                                navigation.navigate("Details", {
                                    anuncio: item,
                                })
                            }
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
