import React from 'react'
import {
    SafeAreaView, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity,
    Dimensions
} from 'react-native'

import colors from '../styles/colors'

import wateringImage from '../assets/watering.png'

export function Welcome () {
    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.title}>Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            <Image 
                source={wateringImage} 
                style={styles.image}
                resizeMode="contain" 
            />

            <Text style={styles.subTitle}>
                Não esqueça mais de regar suas {'\n'} 
                plantas. Nós cuidamos de lembrar você {'\n'}
                sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.75}>
                <Text style={styles.buttonTitle}>></Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    title: {
        fontSize: 32,
        color: colors.heading,
        fontWeight: 'bold',
        marginTop: 38,
        textAlign:'center'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    buttonTitle: {
        color: colors.white,
        fontSize: 16
    }
})