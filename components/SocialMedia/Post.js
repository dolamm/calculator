import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Buttons from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Post = ({post, like, share, comment}) => {

    return(
                <View style={style.post}>
                    <View style={style.postHeader}>
                        <Image source={{uri : post.userAvatar}} style={{width : 30, height : 30, borderRadius: 25, marginRight: 1}}/>
                        <Text style={{fontWeight : 'bold'}}>{post.userName}</Text>
                    </View>
                    <View style={style.contend}>
                        <Text style={style.textContend}>{post.status}</Text>
                        <Image style={style.image} source={{uri : post.image}}/>
                    </View>
                    <View style={style.stat}>
                        <Text style={style.textLike}>{post.totalLike} likes</Text>
                        <Text style={style.textLike}>{post.totalComment} comments</Text>
                        <Text style={style.textLike}>{post.totalShare} shares</Text>
                    </View>
                    <View style={style.Bottom}>
                        <TouchableOpacity onPress={ () => like(post.id)}>
                            <Text><Icon name={post.isLiked ? 'thumbs-up' : 'thumbs-o-up'} size={20} color={post.isLiked ? 'blue' : 'black'} /> like</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => comment(post.id)}>
                            <Text><Icon name='comment-o' size={20} color='black' /> comment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => share(post.id)}>
                            <Text><Icon name='share' size={20} color='black' /> share</Text>
                        </TouchableOpacity>                  
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
        borderRadius : 10,
        marginTop : 10,
    },
    textContend : {
        fontSize : 10,
        color : 'black',
    },
    contend : {
        alignItems : 'left',
        justifyContent : 'center',
        marginTop : 10,
    },
    Bottom : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        borderTopWidth : 0.2,
        paddingTop : 10,
    },
    textLike : {
        fontSize : 15,
        color : 'black'
    },
    stat : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        marginBottom : 10,
        marginTop : 10,
    }
})