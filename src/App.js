import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Buttun from './components/Buttun'
import Display from './components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class App extends Component {
    state = { ...initialState }

    addDigit = n => {
       

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

         if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
            return
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })
        
        if (n !== '.') {
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue
            this.setState({ values })
        }
    }
    clearMemory = () => {
        this.setState({ displayValue: '0'})
    }
    setOperation = operation => {
        if(this.state.current === 0){
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const values = [...this.state.values]

            try{
            values [0] =
            eval(`${values[0]} ${this.state.operation} ${values[1]}`)
        } catch(e){
            values[0] = this.state.values[0]
        }

        values[1] = 0 
        this.setState({
            displayValue: `${values[0]}`, operation: equals ? null : operation, current: equals ? 0 : 1, clearDisplay: !equals, values,
        })
        }
        

        
    }

    render (){
    return(
    <View style={style.container}>
        
        <Display value={this.state.displayValue}/>
       
        <View style = {style.buttons}>
            <Buttun label = 'AC' triple onClick={this.clearMemory}/>
            <Buttun label = '/' operation onClick={() => this.setOperation('/')}/>
            <Buttun label = '7' onClick={() => this.addDigit('7')}/>
            <Buttun label = '8' onClick={() => this.addDigit('8')}/>
            <Buttun label = '9' onClick={() => this.addDigit('9')}/>
            <Buttun label = '*' operation onClick={() => this.setOperation('*')}/>
            <Buttun label = '4' onClick={() => this.addDigit('4')}/>
            <Buttun label = '5' onClick={() => this.addDigit('5')}/>
            <Buttun label = '6' onClick={() => this.addDigit('6')}/>
            <Buttun label = '-' operation onClick={() => this.setOperation('-')}/>
            <Buttun label = '1' onClick={() => this.addDigit('1')}/>
            <Buttun label = '2' onClick={() => this.addDigit('2')}/>
            <Buttun label = '3' onClick={() => this.addDigit('3')}/>
            <Buttun label = '+' operation onClick={() => this.setOperation('+')}/>
            <Buttun label = '0' onClick={() => this.addDigit('0')}/>
            <Buttun label = '.' onClick={() => this.addDigit('.')}/>
            <Buttun label = '=' operation onClick={() => this.setOperation('=')}/>
        </View>
    </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },

    buttons:{
               
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
})