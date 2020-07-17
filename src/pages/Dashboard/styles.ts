import { FlatList } from "react-native";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Product } from "./index";

export const Container = styled.View`
    flex: 1;
    background: #e5e5e5;
`;

export const Header = styled.View`
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 24}px;
    background: #28262e;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserName = styled.Text`
    color: #ff9000;
    font-family: "RobotoSlab-Medium";
`;

export const HeaderTitle = styled.Text`
    color: #f4ede8;
    font-size: 20px;
    font-family: "RobotoSlab-Regular";
    line-height: 28px;
`;

export const ProductsList = styled(FlatList as new () => FlatList<Product>)`
    flex: 1;
    padding: 16px 24px 16px;
`;

export const ProductContainer = styled.View`
    background: white;
    border-radius: 10px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const ProductImage = styled.Image`
    width: 72px;
    height: 72px;
    border-radius: 36px;
`;

export const ProductInfo = styled.View`
    flex: 1;
    margin-left: 20px;
`;

export const ProductName = styled.Text`
    font-family: "RobotoSlab-Medium";
    font-size: 18px;
    color: #3e3b47;
`;

export const ProductMeta = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
    font-family: "RobotoSlab-Regular";
    font-size: 16px;
    margin-left: 8px;
    color: #3e3b47;
`;

export const ProductMetaPrice = styled.Text`
    font-family: "RobotoSlab-Regular";
    font-size: 24px;
    font-weight: bold;
    color: #d98b54;
    flex: 1;
    text-align: center;
`;
