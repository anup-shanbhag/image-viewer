import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Search from '../../common/search/Search';
import ProfileIcon from '../../common/profile/ProfileIcon';
import './Home.css';
import { Box, Card } from '@material-ui/core';
import PostHeader from '../../common/post/PostHeader';
import PostFooter from '../../common/post/PostFooter';
import PostContent from '../../common/post/PostContent';
import { posts, postsDetail } from '../../common/Test';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            userPosts: []
        }
    }

    componentWillMount(){
        postsDetail.map(post => {
            post.caption = posts.data.find( (x) => x.id === post.id).caption;
            this.state.userPosts.push(post);
        });
    }

    render() {
        return (
            <Header title="Image Viewer" positionLeft={<Search><ProfileIcon type="avatarButtonWithMenu" menuOptions={['My Account','Logout']}/></Search>}>
                <Box display="flex" width="100%" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="spaceAround">
                {
                   this.state.userPosts.map(userPost =>(
                    <Card raised className="post">
                    <PostHeader postUser={userPost.username} postedTime={userPost.timestamp}></PostHeader>
                    <PostContent media={userPost.media_url} title={userPost.id} text={userPost.caption} />
                    <PostFooter postUser={userPost.username} likes={Math.round(100 + Math.random() * 100)}/>
                </Card>
                   ))
                }
                </Box>
            </Header>
        );
    }
}