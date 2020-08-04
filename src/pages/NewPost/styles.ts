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

export const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "#666360",
})`
    flex: 1;
    margin: 3px;
    height: 45px;
    padding: 15px;
    background-color: white;
    border: 1px solid #232129;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 14px;
`;

export const Logo = styled.Image`
    height: 60px;
    width: 100px;
`;

export const Area = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AreaGroup = styled.View`
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: white;
`;

export const FormArea = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    padding: 15px;
    margin-bottom: 5px;
    }
`;
