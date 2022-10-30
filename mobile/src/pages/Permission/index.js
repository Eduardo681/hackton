import {
    Center,
    Container,
    ContainerBtnM,
    ContainerBtns,
    TextBtnPrimary,
    TextBtnSecondary,
    Title
} from "../../global-components";
import {Text, View} from "react-native";
import {BtnPrimaryStyled as BtnPrimary, BtnSecondaryStyled as BtnSecondary} from "../Initial/styles";
import {ImagePermission} from "./style";

const permissions = require("../../public/permission.png")
const Permission = ({navigation}) => {
    navigation.setOptions({headerTitle: "Permissões"});
    return <Container>
        <Center>
            <View style={{marginTop: 90}}>
                <ImagePermission source={permissions}/>
                <Title>
                    Permissão
                </Title>
                <View style={{width: "80%"}}>
                    <Text style={{color: "white", fontSize: 18}}>
                        Aceitar compartilhamento de dados com o escritório Enzo e Jéssica Oliveira Contabilidade ME?
                    </Text>
                </View>
                <ContainerBtns>
                    <ContainerBtnM>
                        <BtnSecondary onPress={() => navigation.navigate("Welcome")}>
                            <TextBtnSecondary>
                                Cancelar
                            </TextBtnSecondary>
                        </BtnSecondary>
                    </ContainerBtnM>
                    <ContainerBtnM>
                        <BtnPrimary onPress={() => navigation.navigate("FlushCash")}>
                            <TextBtnPrimary>
                                Aceitar
                            </TextBtnPrimary>
                        </BtnPrimary>
                    </ContainerBtnM>
                </ContainerBtns>
            </View>
        </Center>
    </Container>
}

export default Permission;