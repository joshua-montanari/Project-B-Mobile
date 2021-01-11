import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 25,
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    logo: {
        width: 200,
        height: 100,
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})

export default styles