import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight, View } from 'react-native';

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <View style={stylesButton}>
                <Text style={styles.buttonText}>{props.label}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: "#a28080",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#888",
    },
    buttonText: {
        fontSize: 40,
        color: 'black', // Ajuste a cor para visibilidade
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3,
    },
});