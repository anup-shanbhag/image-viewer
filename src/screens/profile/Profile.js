import React, { Component } from 'react';
import { GridList, GridListTile, Box } from '@material-ui/core';
import Header from '../../common/header/Header';
import ProfileDetail from '../../common/profile/ProfileDetails';
import './Profile.css';
import { posts, postsDetail } from '../../common/Test';


export default class Profile extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Header title="Image Viewer" >
                {/*<Box width="50%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-evenly" className="profile-details">
                    <ProfileIcon type="avatarOnly" />
                    <Box width="50%" display="flex" flexDirection="column" alignContent="space-around" >
                        <Typography variant="h5">{postsDetail[0].username}</Typography>
                        <Box display="flex" flexDirection="row" justifyContent="space-between">
                            <Typography variant="body2">Posts: {postsDetail.length}</Typography>
                            <Typography gutterBottom variant="body2">Follows: {Math.round(500 + Math.random() * 500)}</Typography>
                            <Typography variant="body2">Followed By: {Math.round(1000 + Math.random() * 1000)}</Typography>
                        </Box>
                        <Typography textAlign="center" variant="h6">Anup Shanbhag    <Button
                            style={{ borderRadius: "20px", minWidth:"40px", height: "40px", marginLeft: '5%'}}
                            variant="contained"
                            color="secondary" size="small"
                        ><EditIcon fontSize="inherit"/></Button></Typography>
                    </Box>
        </Box>*/}
        <ProfileDetail className="profile-detail" userName={postsDetail[0].username} fullName="Anup Shanbhag" follows={Math.round(500 + Math.random() * 500)} followers={Math.round(1000 + Math.random() * 1000)}/>
                <Box className="image-grid">
                    <GridList cellHeight={300} cols={3}>
                        {postsDetail.map((post) => (
                            <GridListTile key={post.id}>
                                <img src={post.media_url} alt={post.id} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Box>
            </Header>
        );
    }
}