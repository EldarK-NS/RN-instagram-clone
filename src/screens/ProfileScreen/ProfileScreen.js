import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tomato',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 30
    },
})
