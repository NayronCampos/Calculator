import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight, Button } from 'react-native'



export default props => {
    return (

        <TouchableHighlight onPress = {props.onClick}> 
            <Text style = {style.button}> {props.label} </Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: "#000",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888",
    },

})


/*
export default  props => {
    return(
        t<TouchableHighlight />

    )
}*/