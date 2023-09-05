import React from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function StarMapScreen () {
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.upperContainer}>
                <Text style={styles.title}>Mapa Estelar</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Digite sua longitude"
                placeholderTextColor="#fff"
                onChangeText={(text) => {
                    this.setState({longitude: text})
                }}/>
                <TextInput
                style={styles.textInput}
                placeholder="Digite sua latitude"
                placeholderTextColor="#fff"
                onChangeText={(text) => {
                    this.setState({latitude: text})
                }}/>
            </View>
            <View style={styles.lowerContainer}>
                <WebView
                scalesPageToFit={true}
                source={{uri: path}}
                style={styles.webView}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    upperContainer:{
        flex: 0.35,
        backgroundColor: '#1C0425',
        paddingTop: 12,
        alignItems: 'center'
    },
    title:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 25
    },
    textInput:{
        textAlign: 'center',
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginTop: 15
    },
    lowerContainer:{
        flex: 0.65
    },
    webView:{
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        height: '100%'
    }
})