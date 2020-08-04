import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: #033249;
`;

export const Header = styled.View`
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #ff8038;
    border: 1px solid #ff803d;
    elevation: 3;
`;

export const TextLogo = styled.Text`
    font-size: 27px;
    color: white;
    font-family: "Work Sans SemiBold";
`;

export const ActionButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 60px;
    width: 100px;
`;

export const Contain = styled.View`
    flex: 1;
    padding: 8px;
    margin-top: 10px;
`;

export const ClienteInfo = styled.View`
    padding: 20px;
    border: 1px solid #a9a9a9;
    background-color: white;
    border-radius: 10px;
`;

export const Nome = styled.Text`
    font-size: 21px;
    font-weight: bold;
`;

export const Empresa = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const AreaTel = styled.View`
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
`;

export const Boxtel = styled.TouchableOpacity`
    width: 70%;
    flex-direction: row;
    border: 1px solid #a9a9a9;
    border-radius: 40px;
    padding: 18px 55px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    margin-top: 10px;
`;

export const Boxdata = styled.View`
    flex-direction: row;
    margin-top: 6px;
`;

export const Criado = styled.Text`
    font-size: 16px;
    margin-left: 8px;
`;

export const Expira = styled.Text`
    font-size: 16px;
    margin-left: 8px;
`;

export const Fixo = styled.Text`
    font-size: 18px;
`;

export const Whats = styled.Text`
    font-size: 18px;
`;

export const ProductInfo = styled.View`
    padding: 10px;
    background-color: white;
    border: 1px solid #a9a9a9;
    align-items: center;
    margin-top: 20px;
    border-radius: 10px;
`;

export const ContainerAdress = styled.View`
    flex-direction: row;
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
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
`;

export const ProductColeta = styled.Text`
    font-family: "RobotoSlab-Regular";
    font-size: 14px;
    text-align: center;
`;

export const ProductDestino = styled.Text`
    font-family: "RobotoSlab-Regular";
    font-size: 14px;
    text-align: center;
`;

export const AreaName = styled.View``;

export const ProductName = styled.Text`
    font-family: "RobotoSlab-Medium";
    font-size: 19px;
    color: #3e3b47;
    font-weight: bold;
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
    color: #ff8038;
    flex: 1;
    text-align: center;
`;
