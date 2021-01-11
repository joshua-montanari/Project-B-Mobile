import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles'
import SubmitButton from '../SubmitButton/SubmitButton'

const Login = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.form} placeholder='Email' />
            <TextInput style={styles.form} placeholder='Password' secureTextEntry={true} />
            <SubmitButton type='primary' content={'Login'} onPress={() => {console.warn('Login was pressed')}} />
            <SubmitButton type='secondary' content={'Create and Account'} onPress={() => {console.warn('register was pressed')}} />
        </View>
    )
}

export default Login
