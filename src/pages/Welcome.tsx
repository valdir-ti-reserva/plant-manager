import React from 'react'
import {
    SafeAreaView, 
    Text, 
    View,
    Image, 
    StyleSheet, 
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Feather } from '@expo/vector-icons'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import wateringImage from '../assets/watering.png'

export function Welcome () {

    const navigation = useNavigation()

    function handleStart() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>   
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

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.75}
                    onPress={handleStart}
                >
                    <Feather 
                        name="chevron-right" 
                        style={styles.buttonIcon} 
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    title: {
        fontSize: 28,
        color: colors.heading,
        fontWeight: 'bold',
        marginTop: 38,
        textAlign:'center',
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
})