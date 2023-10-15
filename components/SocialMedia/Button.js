import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Buttons = ({}) => {

    return(
        <View style={style.Bottom}>
            <Button title='👌 Like' onPress={ () => like(post.id) }/>
            <Button title='💬 Comment' onPress={ () => comment(post.id) }/>
            <Button title='📸 Share' onPress={ () => share(post.id) }/>                     
        </View>
    )
}

export default Buttons;

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'aliceblue',
    },
    postHeader:{
        flexDirection : 'row',
        alignItems : 'left',
        justifyContent : 'left',
        padding : 10,
    },
    post : {
        margin : 10,
        padding : 10,
        borderWidth : 0.2,
        borderColor : 'hotpink',
        borderRadius : 10,
        backgroundColor : 'white',
    },
    image : {
        width : '100%',
        height : 200,
    },
    textContend : {
        fontSize : 10,
        fontWeight : 'bold',
        color : 'black',
    },
    contend : {
        alignItems : 'left',
        justifyContent : 'center'
    },
    Bottom : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        borderTopWidth : 0.2,
    },
    textLike : {
        fontSize : 15,
        color : 'black'
    },
    stat : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around'
    }
})