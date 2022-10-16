import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default class Caculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1 : '',
            number2 : '',
            operator : '',
            result : ''
        }
    }

    clear(){
        this.setState({
            number1 : '',
            number2 : '',
            operator : '',
            result : ''
    });
    }

    caculate(){
        let number1 = parseFloat(this.state.number1);
        let number2 = parseFloat(this.state.number2);
        let operator = this.state.operator;
        let result = 0;
        if (operator == '+') {
            result = number1 + number2;
        } else if (operator == '-') {
            result = number1 - number2;
        } else if (operator == '*') {
            result = number1 * number2;
        } else if (operator == '/') {
            result = number1 / number2;
        }
        this.setState({result : result});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput style={styles.textInput} onChangeText={(number1) => this.setState({number1})} value={this.state.number1} keyboardType='numeric'/>
                    <TextInput style={styles.textInput} onChangeText={(operator) => this.setState({operator})} value={this.state.operator} maxLength={1}/>
                    <TextInput style={styles.textInput} onChangeText={(number2) => this.setState({number2})} value={this.state.number2} keyboardType='numeric'/>
                    <Button title="=" onPress={() => this.caculate()}/>
                    <Text style={styles.textResult}>{this.state.result}</Text>
                </View>
                <View style={styles.row}>
                    <Button title="Clear" onPress={() => this.clear()}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: 50,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    textResult: {
        width: 50,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
    }
});