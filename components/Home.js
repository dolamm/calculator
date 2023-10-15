import * as React from 'react';
import { Text, View, StyleSheet, Switch, Image, TextInput, Pressable  } from 'react-native';
import { useState } from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [fag, setFag] = useState([]);

    return (
        <View style={[style.container, darkMode && style.darkmode]}>
            <View style={style.logo}>
                <Image style={style.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2N_KvI2yXxFhe9E0zP3Rpc03_GNydRHH89Q&usqp=CAU'}}/>
                <Text style={[style.textLogo, darkMode && style.textDarkmode]}>React Native App</Text>
            </View>
            <View style={style.header}> 
                <View style={style.com}>
                    <Text style={[style.text, darkMode && style.textDarkmode]}>DarkMode</Text>
                    <Switch value={darkMode} onValueChange={setDarkMode} />
                </View>
                <View style={style.com}>
                    <Text style={[style.text, darkMode && style.textDarkmode]}>Notifications</Text>
                    <Switch value={notifications} onValueChange={setNotifications} />
                </View>
            </View>
            <View style={style.content}>
                <Text style={[style.textLogo, darkMode && style.textDarkmode]}>Feedback</Text>
                <TextInput placeholderTextColor="green" style={[style.textInput, darkMode && style.textInputDarkmode]} placeholder='Enter your feedback'/>
            </View>
        </View>
    );
    }

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    com: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        height: 100,
    
    },
    textInputDarkmode: {    
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10,
        height: 100,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    text: {
        color: '#000',
    },
    textDarkmode: {
        color: '#fff',
    },
    darkmode: {
        backgroundColor: '#000',
    }
});
    