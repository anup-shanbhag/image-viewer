import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import ProfileImage from '../../assets/static-profile-pic.png'

const useStyles = makeStyles({
    userAvatar: {
        border: 0,
        padding: 0,
        margin: 0
    }
});

export default function Profile(props) {
    const [anchor, setAnchor] = React.useState(null);
    const classes = useStyles();
    const handleOpen = (event) => {
        setAnchor(event.currentTarget);
        console.log(Boolean(anchor) + " " + anchor);
    }
    const handleClose = () => {
        setAnchor(null);
        console.log(Boolean(anchor) + " " + anchor);
    }
    return (
        <div>
            <IconButton className={classes.userAvatar} onClick={handleOpen}>
                <Avatar alt="AS" src={ProfileImage} />
            </IconButton>
            <Menu id="profile-menu" anchorEl={anchor} keepMounted open={Boolean(anchor)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>


    );
}