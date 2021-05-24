
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen/DiscoveryScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import CreatePostScreen from '../screens/CreatePostScreen/CreatePostScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeStackScreen from './home.routes';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AdIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <FoundationIcon name='home' size={size} color={color} />
                    }
                    if (route.name === 'Discovery') {
                        return <FeatherIcon name='search' size={size} color={color} />
                    }
                    if (route.name === 'CreatePost') {
                        return <FontAwesomeIcon name='plus-square-o' size={size} color={color} />
                    }
                    if (route.name === 'Notification') {
                        return <AdIcon name='hearto' size={size} color={color} />
                    }
                    if (route.name === 'Profile') {
                        return <IoniconsIcon name='person-outline' size={size} color={color} />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Discovery" component={DiscoveryScreen} />
            <Tab.Screen name="CreatePost" component={CreatePostScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default Router;