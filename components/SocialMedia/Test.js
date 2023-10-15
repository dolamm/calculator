import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Post from './Post';

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
                <Post 
                    key={post.id}
                    post={post}
                    like={like}
                    share={share}
                    comment={comment}
                />
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
    }
})