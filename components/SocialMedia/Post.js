import * as React from 'react';
import { Text, View, Image, StyleSheet, Button} from 'react-native';
import Buttons from './Button';

const Post = ({post, like, share, comment}) => {

    return(
                <View style={style.post}>
                    <View style={style.postHeader}>
                        <Image source={{uri : post.userAvatar}} style={{width : 30, height : 30, borderRadius: 25, marginRight: 1}}/>
                        <Text style={style.text}>{post.userName}</Text>
                    </View>
                    <View style={style.contend}>
                        <Text style={style.textContend}>{post.status}</Text>
                        <Image style={style.image} source={{uri : post.image}}/>
                    </View>
                    <View style={style.stat}>
                        <Text style={style.textLike}>{post.totalLike} </Text>
                        <Text style={style.textLike}>{post.totalComment} </Text>
                        <Text style={style.textLike}>{post.totalShare} </Text>
                    </View>
                    <View style={style.Bottom}>
                        <Button title='👌 Like' onPress={ () => like(post.id) }/>
                        <Button title='💬 Comment' onPress={ () => comment(post.id) }/>
                        <Button title='📸 Share' onPress={ () => share(post.id) }/>                     
                    </View>
                </View>
    )
}

export default Post;

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