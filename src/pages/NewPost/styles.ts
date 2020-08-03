import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: white;
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

export const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "white",
})`
    flex: 1;
    margin: 3px;
    font-size: 15px;
    color: white;
    height: 50px;
    padding: 15px;
    background-color: #232129;
    border: 1px solid #232129;
    border-radius: 10px;
    margin-bottom: 15px;
    font-size: 15px;
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
    margin-bottom: 25px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const FormArea = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    padding: 15px;
    margin-bottom: 5px;
    }
`;
