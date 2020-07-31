import styled from "styled-components/native";

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
