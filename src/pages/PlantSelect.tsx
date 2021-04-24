import React, { useEffect, useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    FlatList
} from 'react-native'

import { Header } from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { PlantCardPrimary } from '../components/PlantCardPrimary'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import api from '../services/api'

interface EnvironmentProps {
    key: string
    title: string
}
interface PlantProps {
    id: string
    name: string
    about: string
    water_tips: string
    photo: string
    environments: [string]
    frequency: {
      times: number
      repeat_every: string
    }
}

export function PlantSelect(){
    const [environmet, setEnvironment] = useState<EnvironmentProps[]>()
    const [plants, setPlants] = useState<PlantProps[]>()
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>()
    const [environmetSelected, setEnvironmetSelected] = useState('all')

    function handleEnvironmentSelected(environment: string){
        setEnvironmetSelected(environment)

        if(environment === 'all'){
            return setFilteredPlants(plants)
        }

        const filtered = plants?.filter(plant => plant.environments.includes(environment))

        setFilteredPlants(filtered)
    }

    useEffect(() => {
        async function fetchEnvironment(){
            const { data } = await api.get('plants_environments?_sort=title&_order=asc')
            setEnvironment([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ])
        }
        
        fetchEnvironment()
    }, [])
    
    useEffect(() => {
        async function fetchPlants(){
            const { data } = await api.get('plants?_sort=name&_order=asc')
            setPlants(data)
        }
        
        fetchPlants()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Header />

                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subTitle}>
                    você deseja colocar a sua planta?
                </Text>

            </View>
            
            <View>
                <FlatList 
                    data={environmet}
                    renderItem={({ item }) => (
                        <EnvironmentButton
                            title={item.title}
                            active={item.key === environmetSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>
           
            <View style={styles.plants}>
                <FlatList 
                    data={filteredPlants}
                    renderItem={({ item }) => (
                        <PlantCardPrimary
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30 
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subTitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading

    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})