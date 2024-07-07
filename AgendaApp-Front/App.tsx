import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ImageBackground, Image, ImageComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import MenuScreen from './Menu';
import style from './style.module';
import Login from './Service';
import ContactList from './ContactList';
import CadastroScreen from './Cadastro';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import AlterarScreen from './Alterar';

function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangeUsername = (username: any) => { setUsername(username) };
  const onchangePassword = (password: any) => { setPassword(password) };
  const login = async () => {
    const auth = await Login(username, password);
    if (auth === true) {
      navigation.navigate('MenuScreen');
    } else {
      alert('Usuário ou senha incorreto.\nPor favor contate Leandro Bona!')
    }
  }

  return (
    <SafeAreaProvider>
      <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
        <View style={style.container}>
          <Image source={require('./assets/userIcon.png')} style={style.icon} />
          <Text style={style.text}>Login:</Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor='#ffffff'
            style={style.input}
            value={username}
            onChangeText={onChangeUsername}
          />
          <Text style={style.text}>Password:</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor='#ffffff'
            style={style.input}
            value={password}
            onChangeText={onchangePassword}
          />
          <Button title='Login' onPress={login} style={style.button} />
          <Image source={require('./assets/logo_es.png')} style={style.logo} />
          <Text></Text>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="ListScreen" component={ContactList} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="AlterarScreen" component={AlterarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}