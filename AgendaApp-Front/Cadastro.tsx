import { NavigationProp } from '@react-navigation/native';
import { Alert, Button, ImageBackground, Image, ImageComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import style from './style.module';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Save } from './Service';

export default function CadastroScreen({ navigation }: { navigation: NavigationProp<any> }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setbirthDate] = useState('');
    const [description, setDescription] = useState('');

    const onChangeName = (name: any) => { setName(name) };
    const onchangePhone = (phone: any) => { setPhone(phone) };
    const onchangeEmail = (email: any) => { setEmail(email) };
    const onchangebirthDate = (birthDate: any) => { setbirthDate(birthDate) };
    const onchangeDescription = (description: any) => {setDescription(description) };

    const adicionar = async () => {
        const add = await Save(name, phone, email, birthDate, description);
        if (add === true) {
            navigation.navigate('MenuScreen');
        } else {
            alert('Erro ao acicionar contato')
        }
    }

    return (
        <SafeAreaProvider>
            <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
                <View style={style.container}>
                    {/* <Image source={require('./assets/userIcon.png')} style={style.icon} /> */}
                    <Text style={style.text}>Nome do Contato:</Text>
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor='#ffffff'
                        style={style.input}
                        value={name}
                        onChangeText={onChangeName}
                    />
                    <Text style={style.text}>Telefone:</Text>
                    <TextInput
                        placeholder="Telefone:"
                        placeholderTextColor='#ffffff'
                        style={style.input}
                        value={phone}
                        onChangeText={onchangePhone}
                    />
                    <Text style={style.text}>Email:</Text>
                    <TextInput
                        placeholder="Email@email.com:"
                        placeholderTextColor='#ffffff'
                        style={style.input}
                        value={email}
                        onChangeText={onchangeEmail}
                    />
                    <Text style={style.text}>Data de Nascimento:</Text>
                    <TextInput
                        placeholder="DD/MM//YYYY:"
                        placeholderTextColor='#ffffff'
                        style={style.input}
                        value={birthDate}
                        onChangeText={onchangebirthDate}
                    />
                    <Text style={style.text}>Descrição:</Text>
                    <TextInput
                        placeholder="Descrição:"
                        placeholderTextColor='#ffffff'
                        style={style.input}
                        value={description}
                        onChangeText={onchangeDescription}
                    />
                    <Button title='Adicionar' onPress={adicionar} style={style.button} />
                    <Text></Text>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}