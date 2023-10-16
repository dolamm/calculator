import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, SectionList, ImageBackground  } from 'react-native';
import { useState } from 'react';
import { fruits_vegetables, workouts} from './data';
import { Button } from '@rneui/themed';    

const ToDoList = () => {
    const [selectedList, setSelectedList] = useState([]);

    const isSelected = (name) => {
        return selectedList.includes(name);
    }

    const selectList = (name) => {
        if(isSelected(name)){
            setSelectedList(selectedList.filter(item => item != name))
        }
        else{
            setSelectedList([...selectedList, name]);
        }
    }

    const Itemlist = ({itemName}) => {
        return(
            <View style={style.workoutsItem}>
                <Text style={style.workoutsName}>{itemName}</Text>
                <Button title={isSelected(itemName)?"Unselect":"Select"} onPress={ () => selectList(itemName)}/>
                {/* <Button title={ selectedItem.find(item => item.id == itemId)?"Unselect":"Select"} style={style.select} onPress={ () => selectItem(itemId)}/> */}
            </View>
        )
    }

    return (
        <View style={style.container}>
            <Text style={style.text}>Workouts</Text>
            <View style={style.workouts}>
                <ImageBackground source={{uri: 'https://lachuoixuatkhau.vn/wp-content/uploads/2021/08/Healthy-Eating-Topic-of-the-month-1080x670.jpeg'}}>
                <FlatList
                    data={workouts}
                    renderItem={({item}) => <Itemlist itemName={item.type} />}
                    keyExtractor={item => item.id}
                />
                </ImageBackground>
            </View>
            <Text style={style.text}>Fruits and Vegetables</Text>
            <View style={style.tabemono}>
                <ImageBackground source={{uri: 'https://banhmigachdo.com/storage/2023/02/healthy-2.jpg'}}>
                <SectionList
                    sections={fruits_vegetables}
                    renderItem={({item}) => <Itemlist itemName={item} />}
                    renderSectionHeader={({section}) => <Text style={style.text}>{section.title}</Text>}
                    keyExtractor={(item, index) => item + index}
                />
                </ImageBackground>
            </View>
            <ScrollView style={style.selectList}>
                <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>Selected Exercise :</Text>
                <Text style={{fontSize: '10'}}>{selectedList.join(',')}</Text>
            </ScrollView>
        </View>
    );
    }

export default ToDoList;

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'aliceblue',
    },
    text : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'black',
        margin : 10,
        textAlign : 'center',
    },
    workouts : {
        backgroundColor : 'aliceblue',
        height : 250,
    },
    workoutsItem : {
        flexDirection : 'row',
        borderWidth : 0.2,
        borderRadius : 10,
        margin : 10,
        backgroundColor : 'white',
        padding : 10,
        justifyContent : 'space-between',
        opacity : 0.8,
    },
    workoutsName : {
        fontSize : 15,
        fontWeight : 'bold',
        color : 'black',
    },
    tabemono : {
        height : 300,
    }
});