import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // padding: 10,
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // width: '100%',
        // paddingHorizontal: 20,
        // backgroundColor: 'blue',
        width: '100%',
        padding: 10
    },
    logo: {
        width: 200,
        height: 100,
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    button: {
        justifyContent: 'space-evenly',
        height: 80,
        borderRadius: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#181a18',
        alignItems: 'center'
    },
    winner: {
        fontWeight: '500',
        color: 'green',
        fontSize: 'larger'
    },
    loser: {
        fontWeight: '500',
        color: 'red',
        fontSize: 'larger'
    },
    score: {
        fontWeight: '500',
        color: 'white',
        fontSize: 'larger'
    }
})

export default styles