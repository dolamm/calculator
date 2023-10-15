import * as React from 'react';
import { useState } from 'react';
import { Text, View, Image, StyleSheet, Button, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { AsyncStorageStatic } from 'react-native';

const allpost = [
    {
        id : 1,
        userName : 'User Name',
        userAvatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0nl_T-lkrkEefsMdO2IQhooaSPp8DmaP7A&usqp=CAUr',
        status : 'This is a post',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0nl_T-lkrkEefsMdO2IQhooaSPp8DmaP7A&usqp=CAU',
        isLiked : false,
        isShared : false,
        totalLike : 1,
        totalComment : 0,
        totalShare : 0
    },
    {
        id : 2,
        userName : 'User Name2',
        userAvatar : 'https://s3.cloud.cmctelecom.vn/tinhte2/2020/03/4937098_bo-suu-tap-anh-cho-19.jpg',
        status : 'This is a post',
        image : 'https://s3.cloud.cmctelecom.vn/tinhte2/2020/03/4937098_bo-suu-tap-anh-cho-19.jpg',
        isLiked : false,
        isShared : false,
        totalLike : 1,
        totalComment : 2,
        totalShare : 0
    }
]

const SocialMedia = () => {

    const [posts, setPost] = useState(allpost);

    const like = (postId) => {
        const updatedPosts = posts.map(post => {
            if(post.id === postId){
                return {
                    ...post,
                    isLiked : !post.isLiked,
                    totalLike : post.isLiked ? post.totalLike - 1 : post.totalLike + 1
                }
            }
            return post;
        }
        )
        setPost(updatedPosts);
    }

    const share = (postId) => {
        const updatedPosts = posts.map(post => {
            if(post.id === postId){
                return {
                    ...post,
                    isShared : !post.isShared,
                    totalShare : post.isShared ? post.totalShare - 1 : post.totalShare + 1
                }
            }
            return post;
        }
        )
        setPost(updatedPosts);
    }

    const comment = (postId) => {
        const updatedPosts = posts.map(post => {
            if(post.id === postId){
                return {
                    ...post,
                    totalComment : post.totalComment + 1
                }
            }
            return post;
        }
        )
        setPost(updatedPosts);
    }

    return(
        <ScrollView style={style.container}>
            {
                posts.map((post) => (
                <View style={style.post} key={post.id}>
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
                ))
            }
            </ScrollView>
    )
}

export default SocialMedia;

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