import React, { Component } from 'react';
import { GridList, GridListTile, Box, Modal, Backdrop, Fade } from '@material-ui/core';
import PostHeader from '../../common/post/PostHeader';
import PostMedia from '../../common/post/PostMedia';
import PostCaption from '../../common/post/PostCaption';
import PostLikes from '../../common/post/PostLikes';
import PostComments  from '../../common/post/PostComments';
import PageWithHeader from '../../common/header/PageWithHeader';
import ProfileDetail from '../../common/profile/ProfileDetails';
import ProfileIcon from '../../common/profile/ProfileIcon';
import './Profile.css';
import { posts, postsDetail } from '../../common/Test';


export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            userPosts: [],
            open: false,
            userPost: {}
        }
    }

    getProfileAvatar = () => {
        return (
        <Box  ml="auto" display="flex" flexDirection="row" alignItems="center">
            <ProfileIcon type="avatarWithMenu" menuOptions={['Logout']} />
        </Box>);
    };

    componentWillMount() {
        postsDetail.map(post => {
            post.caption = posts.data.find((x) => x.id === post.id).caption;
            this.state.userPosts.push(post);
        });
    }

    openPostDetails = (e) => {
        this.setState({ open: true, userPost: this.state.userPosts.find((post) => post.id === e.target.id) });
    }

    closePostDetails = (e) => {
        this.setState({ open: false, userPost: {} });
    }

    render() {
        return (
            <PageWithHeader title="Image Viewer" positionLeft={this.getProfileAvatar}>
                <ProfileDetail className="profile-detail" userName={this.state.userPosts[0].username} numPosts={this.state.userPosts.length}
                    fullName="Anup Shanbhag" follows={Math.round(500 + Math.random() * 500)}
                    followers={Math.round(1000 + Math.random() * 1000)} />
                <Box className="image-grid">
                    <GridList cellHeight={300} cols={3}>
                        {this.state.userPosts.map((userPost) => (
                            <GridListTile key={userPost.id} >
                                <img id={userPost.id} src={userPost.media_url} alt={userPost.id} onClick={this.openPostDetails} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Box>

                <Modal className="modal" open={this.state.open}
                    onClose={this.closePostDetails} closeAfterTransition BackdropComponent={Backdrop}>
                    <Fade in={this.state.open}>
                        <Box width="60%" display="flex" flexDirection="row" justifyContent="space-evenly" className="modal-content">
                            <Box m="1%" width="50%" className="image-container" >
                                <PostMedia media={this.state.userPost.media_url} mediaId={this.state.userPost.id} minWidth="350px" minHeight="350px" />
                            </Box>
                            <Box m="2%" width="50%" display="flex" flexDirection="column" justifyContent="left" alignItems="center">
                                <PostHeader postUser={this.state.userPost.username} postedTime={this.state.userPost.timestamp} />
                                <PostCaption mb="auto" text={this.state.userPost.caption} />
                                <Box mt="auto" width="100%">
                                    <PostComments postUser={this.state.userPost.username} >
                                        <PostLikes likes={Math.round(100 + Math.random() * 100)} />
                                    </PostComments>
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>}
            </PageWithHeader>
        );
    }
}