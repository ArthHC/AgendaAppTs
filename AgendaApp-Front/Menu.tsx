import { View, Text, ImageBackground, Button } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationProp } from '@react-navigation/native';
import style from "./style.module";

export default function MenuScreen({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <SafeAreaProvider>
            <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
                <View style={style.container}>
                    <Button title='Lista de Contatos' onPress={() => navigation.navigate('ListScreen')} style={style.button} />
                    <Button title='Adicionar um contato' onPress={() => navigation.navigate('CadastroScreen')} style={style.button} />
                    
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
};
