import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: '#eedd99'
    },

    image: {
        width: 200,
        height: 200,
    },

    buttonArea: {
        borderRadius: 20,
        backgroundColor: '#ff9c97',
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 24,
        textTransform: 'uppercase',
        padding: 20,
    },

    text: {
        marginVertical: 24,
        fontSize: 18,
        color: '#dd7b22',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 24,
        lineHeight: 24,
        minHeight: 60
        
    },
});

export default styles;

