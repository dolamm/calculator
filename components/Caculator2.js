import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList, SafeAreaView } from 'react-native';
import { AsyncStorageStatic } from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default class Caculator2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expression : '',
            result : '',
            history : [],
            searchResult : [],
            keyword : ''
        }
    }

    clear(){
        this.setState({
            expression : '',
            result : ''
        });
    }

    caculate(){
        let expression = this.state.expression;
        let result = eval(expression);
        this.setState({result : result});
        this.setState({history : [...this.state.history, expression + '=' + result]});
        console.log(this.state.history);
    }

    search(keyword) {
        this.setState({keyword : keyword});
        let searchResult = this.state.history.filter(item => item.includes(keyword));
        this.setState({searchResult : searchResult});
    }

    // Search highlight text
    renderSearchItem = ({ item }) => {
        let keyword = this.state.keyword;
        let index = item.indexOf(keyword);
        let before = item.substring(0, index);
        let after = item.substring(index + keyword.length);
        return (
            <View style={styles.item}>
                <Text>
                    <Text style={styles.title}>{before}</Text>
                    <Text style={styles.highlight}>{keyword}</Text>
                    <Text style={styles.title}>{after}</Text>
                </Text>
            </View>
        );
    };

    clearStack() {
        this.setState({searchResult : []});
        this.setState({keyword : ''});
    }

    renderItem = ({ item }) => (
        <Item title={item} />
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput style={styles.textInput} onChangeText={(expression) => this.setState({expression})} value={this.state.expression}/>
                    <Button style={styles.button} title="=" onPress={() => this.caculate()}/>
                    <Text style={styles.textResult}>{this.state.result}</Text>
                </View>
                <View style={styles.row}>
                    <Button title="Clear" onPress={() => this.clear()}/>
                </View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={this.state.history}
                        renderItem={this.renderItem}
                        keyExtractor={item => item}
                    />
                </SafeAreaView>
                <View style={styles.row}>
                    <TextInput placeholder=' Search..' style={styles.textInput} onChangeText={(keyword) => this.search(keyword)}/>
                </View>
                <View style={styles.row}>    
                    <Button title="Clear Stack" onPress={() => this.clearStack()}/>
                </View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={this.state.searchResult}
                        renderItem={this.renderSearchItem}
                        keyExtractor={item => item}
                    />
                </SafeAreaView>
            </View>
        );
    }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    textInput: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
    },
    textResult: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        textAlign: 'center',
        borderRadius: 5,
    },
    button: {
        width: 40,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    highlight: {
        fontWeight: 'bold',
        color: 'red',
    },
});