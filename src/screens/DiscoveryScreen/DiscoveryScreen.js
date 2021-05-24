import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feed from '../../components/Feed/Feed'

export default function DiscoveryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Discovery Screen</Text>
            {/* <Feed /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 30
    },
})
