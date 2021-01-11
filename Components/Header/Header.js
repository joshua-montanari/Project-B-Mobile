import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/Images/bnwlogo.png')} />
        </View>
    )
}

export default Header
