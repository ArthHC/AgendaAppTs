import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import { getAllRegs } from "./Service";
import { NavigationProp } from '@react-navigation/native';
import { Divider } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import style from "./style.module";

export interface Contato {
    id: number,
    name: string,
    phone: any,
    email: string,
    bDate: any,
    description: any;
}

export default function ContactList({ navigation }: { navigation: NavigationProp<any> }) {
    const [rows, setRows] = useState<Contato[]>([]);

    async function findRegs() {
        const linhas: any = await getAllRegs();
        console.log('linhas:' + JSON.stringify(linhas))
        setRows(linhas);
    }

    useEffect(() => {
        findRegs();
    }, []);

    type ItemProps = { itensProps: any };

    const PersonalizeItem = ({ itensProps }: ItemProps) => (
        <View style={styles.item}>
            <Text style={styles.title}>{itensProps.name}</Text>
        </View>
    );

    function edit(cttId: number, cttName: string, cttPhone: any, cttEmail: string, cttBirthDate: any, cttDescription: any) {
        navigation.navigate('AlterarScreen', {
            ContactId: cttId, ContactName: cttName, ContactPhone: cttPhone, ContactEmail: cttEmail,
            ContactBirthDate: cttBirthDate, ContactDescription: cttDescription
        });
    }

    return (
        <SafeAreaProvider>
            <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
                <View style={styles.container}>
                    <View style={styles.selectorHeader}>
                        <Text style={styles.text}> Lista de contatos </Text>
                    </View>
                    <Divider />
                    {rows.map((l, i) => (
                        <Text style={styles.item} key={i}
                            onPress={() => edit(l.id, l.name, l.phone, l.email, l.bDate, l.description)}
                        >
                            {l.name}
                        </Text>
                    ))}
                    <Divider />
                    {/* <FlatList
                    data={list}
                    renderItem={({ item }) =>
                        <View>
                            <Text style={styles.item} onPress={() => alert(${item.id})}>
                                {item.name}
                            </Text>
                        </View>
                    }
                /> */}
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22,
    },
    title: {
        fontSize: 32,
    },
    selectorHeader: {
        width: '100%',
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 24,
    },
    item: {
        color: '#fff',
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
