import { FlatList } from "react-native";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Product } from "./index";

export const Container = styled.View`
    flex: 1;
    background: #e5e5e5;
`;

export const Header = styled.View`
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    background-color: white;
    border: 1px solid #ddd;
    elevation: 3;
`;

export const ActionButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 60px;
    width: 100px;
`;

export const ProductsList = styled(FlatList as new () => FlatList<
    Product
>).attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    padding: 16px;
`;

export const ProductContainer = styled.TouchableOpacity`
    background: white;
    border-radius: 15px;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductInfo = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerAdress = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    margin-top: 15px;
`;

export const AreaAdress = styled.View`
    flex: 1;
    margin: 5px;
    align-items: center;
    justify-content: center;
`;

export const TitleAddress = styled.Text`
    font-size: 17px;
    font-weight: bold;
    margin: 5px;
`;

export const ProductColeta = styled.Text`
    font-family: "RobotoSlab-Regular";
    font-size: 12px;
    text-align: center;
`;

export const ProductDestino = styled.Text`
    font-family: "RobotoSlab-Regular";
    font-size: 12px;
    text-align: center;
`;

export const AreaName = styled.View`
    flex: 1;
`;

export const ProductName = styled.Text`
    font-family: "RobotoSlab-Medium";
    font-size: 17px;
    color: #3e3b47;
    text-align: center;
`;

export const ProductMeta = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const ProductMetaPrice = styled.Text`
    font-family: "RobotoSlab-Regular";
    font-size: 24px;
    font-weight: bold;
    color: #d98b54;
    flex: 1;
    text-align: center;
`;
