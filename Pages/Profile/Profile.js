import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles'
import Login from '../../Components/Login/Login'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile Page!</Text>
            <Login />
        </View>
    )
}

export default Profile
