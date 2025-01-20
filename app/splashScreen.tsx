import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo, { LogoProps } from '../components/logo';


export interface SplashScreenProps { }

class SplashScreen extends Component<SplashScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <Logo {...logoProps} />
                <Text style={styles.text}>Quem controla sua vida financeira é você!</Text>
            </View>
        );
    }
}

export default SplashScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDCD07',

    },
    logo: {
        width: 250,
        height: 175,
        elevation: 5,
    },
    text: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
    }
})

const logoProps: LogoProps = {
    imagem: require('../assets/images/logo.png'),
    style: styles.logo
}