import React, { Component } from 'react';
import { Box, Card, CardContent, CardActions, CardHeader, Typography, Link } from '@material-ui/core';
import PostMedia from '../../common/post/PostMedia';
import PostCaption from '../../common/post/PostCaption';
import PostLikes from '../../common/post/PostLikes';
import PostComments from '../../common/post/PostComments';
import PageWithHeader from '../../common/header/PageWithHeader';
import Search from '../../common/search/Search';
import ProfileIcon from '../../common/profile/ProfileIcon';
import './Home.css';
import { posts, postsDetail } from '../../common/Test';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            userPosts: []
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.redirectUserToAccountsPage = this.redirectUserToAccountsPage.bind(this);
    }

    logoutUser = () => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }

    redirectUserToAccountsPage = () => this.props.history.push('/profile');

    getProfileAvatar = () => {
        return (
            <Box ml="auto" display="flex" flexDirection="row" alignItems="center">
                <Search />
                <ProfileIcon type="avatarWithMenu" menuOptions={['My Account', 'Logout']}
                    handlers={[this.redirectUserToAccountsPage, this.logoutUser]} />
            </Box>);
    };

    componentWillMount() {
        postsDetail.map(post => {
            post.caption = posts.data.find((x) => x.id === post.id).caption;
            this.state.userPosts.push(post);
        });
        console.log(this.state.userPosts);
    }

    render() {
        return (
            <PageWithHeader title="Image Viewer" positionLeft={this.getProfileAvatar}>
                <Box display="flex" width="90%" m="auto" flexDirection="row" flexWrap="wrap" alignItems="space-around" justifyContent="space-between">
                    {
                        this.state.userPosts.map(userPost => (
                            <Card raised className="post">
                                <CardHeader className="post-header" disableTypography
                                    avatar={<ProfileIcon type="avatarOnly" />}
                                    title={<Typography className="text-bold" variant="body1">{userPost.username}</Typography>}
                                    subheader={<Typography className="text-lite" variant="subtitle2">{userPost.timestamp}</Typography>}>
                                </CardHeader>
                                <CardContent className="post-content">
                                    <PostMedia media={userPost.media_url} mediaId={userPost.id} />
                                    <PostCaption text={userPost.caption} />
                                </CardContent>
                                <CardActions className="post-footer">
                                    <Box width="100%" display="flex" flexDirection="column" alignItems="left">
                                        <PostLikes likes={Math.round(100 + Math.random() * 100)} />
                                        <PostComments postUser={userPost.username} />
                                    </Box>
                                </CardActions>
                            </Card>
                        ))
                    }
                </Box>
            </PageWithHeader>
        );
    }
}