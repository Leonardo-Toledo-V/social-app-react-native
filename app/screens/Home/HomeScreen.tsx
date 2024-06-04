import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../../utils/FirebaseConfig'

interface NavigatorProps {
    navigation: NavigationProp<any, any>

}

const HomeScreen = ({ navigation }: NavigatorProps) => {
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>HomeScreen</Text>
            <Button onPress={() => navigation.navigate('details')} title='Open details'/>
            <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout'/>
        </View>
    )
}

export default HomeScreen