import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import formatValue from "../../utils/formatValue";

import {
    Container,
    Header,
    HeaderTitle,
    UserName,
    ProductsList,
    ProductContainer,
    ProductImage,
    ProductInfo,
    ProductMeta,
    ProviderMetaText,
    ProductName,
    ProductMetaPrice,
} from "./styles";

export interface Product {
    _id: number;
    sku: string;
    quantidade?: number;
    preco: number;
    vendedor: number;
    imagem: string;
    ativo?: boolean;
}

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const numColumns = 2;
    useEffect(() => {
        setProducts([
            {
                _id: 1,
                sku: "Produto 01",
                preco: 11.95,
                vendedor: 3,
                imagem:
                    "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/pizzas.png",
            },
            {
                _id: 2,
                sku: "Produto 02",
                preco: 5.5,
                vendedor: 3,
                imagem:
                    "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/carnes.png",
            },
            {
                _id: 3,
                sku: "Produto 03",
                preco: 30.0,
                vendedor: 1,
                imagem:
                    "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/ao_molho.png",
            },
            {
                _id: 4,
                sku: "Produto 04",
                preco: 25.95,
                vendedor: 5,
                imagem:
                    "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png",
            },
            {
                _id: 5,
                sku: "Produto 05",
                preco: 23.99,
                vendedor: 3,
                imagem:
                    "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food3.png",
            },
        ]);
    }, []);
    return (
        <Container>
            <ProductsList
                data={products}
                keyExtractor={(product): any => product._id}
                numColumns={numColumns}
                renderItem={({ item: product }) => (
                    <ProductContainer
                        style={{
                            flex: 1,
                            width: Dimensions.get("window").width / 2,
                            margin: 6,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ProductImage source={{ uri: product.imagem }} />
                        <ProductInfo>
                            <ProductName>{product.sku}</ProductName>
                            <ProductMeta>
                                <ProductMetaPrice>
                                    {formatValue(product.preco)}
                                </ProductMetaPrice>
                            </ProductMeta>
                        </ProductInfo>
                    </ProductContainer>
                )}
            />
        </Container>
    );
};

export default Dashboard;
