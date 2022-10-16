import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Component } from 'react'
import { TouchableOpacity, TextInput} from 'react-native'


class Inputs extends Component {
    state = {
       a: '',
       b: '',
    }
    handleSetA = (int) => {
       this.setState({ a: int })
    }
    handleSetB = (int) => {
       this.setState({ b: int })
    }
    login = (a, b) => {
       alert('equal:'+ {a} + {b})
    }

    render() {
        return (
           <View style = {styles.container}>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "A"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handleSetA}/>
              
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "B"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handleSetB}/>
              
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.login(this.state.a, this.state.b)
                 }>
                 <Text style = {styles.submitButtonText}> Plus </Text>
              </TouchableOpacity>
           </View>
        )
     }
    }
    export default Inputs
    
    const styles = StyleSheet.create({
       container: {
          paddingTop: 23
       },
       input: {
          margin: 15,
          height: 40,
          borderColor: '#7a42f4',
          borderWidth: 1
       },
       submitButton: {
          backgroundColor: '#7a42f4',
          padding: 10,
          margin: 15,
          height: 40,
       },
       submitButtonText:{
          color: 'white'
       }
    })
