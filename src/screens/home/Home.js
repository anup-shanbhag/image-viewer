import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Search from '../../common/search/Search';
import Profile from '../../common/profile/Profile';
import './Home.css';
import { Box, Card } from '@material-ui/core';
import { postDetail, posts, postsDetail } from '../../common/Test';
import PostHeader from '../../common/post/PostHeader';
import PostFooter from '../../common/post/PostFooter';
import PostContent from '../../common/post/PostContent';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Header title="Image Viewer" positionLeft={<Search><Profile type="avatarButtonWithMenu" menuOptions={['My Account','Logout']}/></Search>}>
                <Box display="flex" width="100%" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="spaceAround">
                {
                   postsDetail.map(post =>(
                    <Card raised className="post">
                    <PostHeader postUser={post.username} postedTime={post.timestamp}></PostHeader>
                    <PostContent media={post.media_url} title={post.id} text={posts.data.find( (x) => x.id === post.id).caption} />
                    <PostFooter postUser={post.username} likes={Math.round(100 + Math.random() * 100)}/>
                </Card>
                   ))
                }
                </Box>
            </Header>
        );
    }
}