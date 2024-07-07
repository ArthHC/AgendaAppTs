import { NavigationProp, useRoute } from '@react-navigation/native';
import { Alert, Button, ImageBackground, Image, ImageComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import style from './style.module';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Update, Delete } from './Service';

type RouteParams = {
    ContactId: number;
    ContactName: string;
    ContactPhone: any;
    ContactEmail: string;
    ContactBirthDate: any;
    ContactDescription: any;
}

export default function AlterarScreen({ navigation }: { navigation: NavigationProp<any> }) {

    const route = useRoute();
    const { ContactId } = route.params as RouteParams;
    const { ContactName } = route.params as RouteParams;
    const { ContactPhone } = route.params as RouteParams;
    const { ContactEmail } = route.params as RouteParams;
    const { ContactBirthDate } = route.params as RouteParams;
    const { ContactDescription } = route.params as RouteParams;
    
    const [id, setId] = useState(ContactId);
    const [name, setName] = useState(ContactName);
    const [phone, setPhone] = useState(ContactPhone);
    const [email, setEmail] = useState(ContactEmail);
    const [birthDate, setbirthDate] = useState(ContactBirthDate);
    const [description, setDescription] = useState(ContactDescription);

    const onChangeName = (name: any) => { setName(name) };
    const onchangePhone = (phone: any) => { setPhone(phone) };
    const onchangeEmail = (email: any) => { setEmail(email) };
    const onchangebirthDate = (birthDate: any) => { setbirthDate(birthDate) };
    const onchangeDescription = (description: any) => {setDescription(description) };

    const adicionar = async () => {
        const add = await Update(id, name, phone, email, birthDate, description);
        if (add === true) {
            navigation.navigate('MenuScreen');
        } else {
            alert('Erro ao realiar a alteração');
        }
    }

    const deletar = async () => {
        const del = await Delete(id);
        if (del === true) {
            navigation.navigate('MenuScreen');
        } else {
            alert('Falha na hora de deletar contato');
        }
    }

    return (
        <SafeAreaProvider>
            <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
                <View style={style.container}>
                    {/* <Image source={require('./assets/userIcon.png')} style={style.icon} /> */}
                    <Text style={style.text}>ID: {id}</Text>
                    <Text style={style.text}>Nome do Contato:</Text>
                    <TextInput
                        placeholderTextColor='#ffffff'
                        style={style.input}
                        value={name}
                        onChangeText={onChangeName}
                    />
                    <Text style={style.text}>Telefone:</Text>
                    <TextInput
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
                        placeholder="YYYY/MM/DD:"
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
                    <Button title='Alterar' onPress={adicionar} style={style.button} />
                    <Button title='Deletar' onPress={deletar} style={style.button} />
                    <Text></Text>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

function findRegs() {
    throw new Error('Function not implemented.');
}
