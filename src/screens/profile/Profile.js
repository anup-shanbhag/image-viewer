import React, { Component } from 'react';
import { GridList, GridListTile, Box } from '@material-ui/core';
import Header from '../../common/header/Header';
import ProfileDetail from '../../common/profile/ProfileDetails';
import './Profile.css';
import { posts, postsDetail } from '../../common/Test';


export default class Profile extends Component {
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
            <Header title="Image Viewer" >
                <ProfileDetail className="profile-detail" userName={this.state.userPosts[0].username}
                    fullName="Anup Shanbhag" follows={Math.round(500 + Math.random() * 500)}
                    followers={Math.round(1000 + Math.random() * 1000)} />
                <Box className="image-grid">
                    <GridList cellHeight={300} cols={3}>
                        {this.state.userPosts.map((userPost) => (
                            <GridListTile key={userPost.id}>
                                <img src={userPost.media_url} alt={userPost.id} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Box>
            </Header>
        );
    }
}