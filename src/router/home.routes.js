import React from 'react'
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/Feather';

import logo from '../assets/images/logo.png'

import HomeScreen from '../screens/HomeScreen/HomeScreen'


const HomeStack = createStackNavigator();

const HomeRoutes = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Instagram',
                    headerTitleAlign: 'center',
                    headerLeftContainerStyle: {
                        marginLeft: 10
                    },
                    headerRightContainerStyle: {
                        marginRight: 10
                    },
                    headerLeft: () => {
                        return <CameraIcon name='camera' size={23} color={'black'} />
                    },
                    headerRight: () => {
                        return <IoniconsIcon name="paper-plane-outline" size={23} color='#5d5d5d' />
                    },
                    headerTitle: () => {
                        return <Image source={logo} style={{ width: 130 }} resizeMode='contain' />
                    }
                }}
            />
        </HomeStack.Navigator>
    )


}

export default HomeRoutes