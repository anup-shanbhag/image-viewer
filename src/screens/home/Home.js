import React, { Component } from 'react';
import { Box, Card, CardContent, CardActions, CardHeader, Typography } from '@material-ui/core';
import PostMedia from '../../common/post/PostMedia';
import PostCaption from '../../common/post/PostCaption';
import PostLikes from '../../common/post/PostLikes';
import PostComments from '../../common/post/PostComments';
import PageWithHeader from '../../common/header/PageWithHeader';
import Search from '../../common/search/Search';
import ProfileIcon from '../../common/profile/ProfileIcon';
import FetchPosts from '../../common/post/FetchPosts';
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            searchPattern: "",
            posts: [],
            userPosts: []
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.redirectUserToAccountsPage = this.redirectUserToAccountsPage.bind(this);
        this.filterPost = this.filterPost.bind(this);

    }

    filterPost = (e) => {
        this.setState({
            searchPattern: e.target.value, userPosts: this.state.posts.filter(
                (post) => post.caption.includes(e.target.value)
            )
        });
    }

    logoutUser = () => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }

    covertDate = (x) => {
        let date = new Date(x);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        dd = (dd < 10) ? ("0" + dd) : dd;
        mm = (mm < 10) ? ("0" + mm) : mm;
        return dd + '/' + mm + '/' + date.getFullYear()
            + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    };

    redirectUserToAccountsPage = () => this.props.history.push('/profile');

    getProfileAvatar = () => {
        return (
            <Box ml="auto" display="flex" flexDirection="row" alignItems="center">
                <Search onChange={this.filterPost} />
                <ProfileIcon type="avatarWithMenu" menuOptions={['My Account', 'Logout']}
                    handlers={[this.redirectUserToAccountsPage, this.logoutUser]} />
            </Box>);
    };

    componentDidMount() {
        let postDetails = FetchPosts(true);
        //console.log(this.postDetails);
        //console.log(JSON.parse(JSON.stringify(postDetails)));
        this.setState({posts : JSON.parse(JSON.stringify(postDetails)), userPosts: JSON.parse(JSON.stringify(postDetails))});
        //console.log(this.state.userPosts);
        //console.log('Component Loaded: ' + new Date());
    }

    render() {
        return (
            <PageWithHeader title="Image Viewer" positionLeft={this.getProfileAvatar}>
                <Box display="flex" width="90%" m="auto" flexDirection="row" flexWrap="wrap" alignItems="space-around" justifyContent="space-between">
                    {
                        this.state.userPosts.map(userPost => (
                            <Card key={userPost.id + "post"} raised className="post">
                                <CardHeader className="post-header" disableTypography
                                    avatar={<ProfileIcon type="avatarOnly" />}
                                    title={<Typography className="text-bold" variant="body1">{userPost.username}</Typography>}
                                    subheader={<Typography className="text-lite" variant="subtitle2">{this.covertDate(userPost.timestamp)}</Typography>}>
                                </CardHeader>
                                <CardContent className="post-content">
                                    <PostMedia media={userPost.media_url} mediaId={userPost.id} />
                                    <PostCaption text={userPost.caption} />
                                </CardContent>
                                <CardActions className="post-footer">
                                    <Box width="100%" display="flex" flexDirection="column" alignItems="left">
                                        <PostLikes likes={userPost.numLikes} />
                                        <PostComments baseId={userPost.id} postUser={userPost.username} />
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