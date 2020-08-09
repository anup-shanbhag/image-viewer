import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import ProfileImage from '../../assets/static-profile-pic.png'

const useStyles = makeStyles({
    userAvatar: {
        border: 0,
        padding: 0,
        margin: 0
    },
    menuItemSeparator: {
        marginLeft: "15px",
        marginRight: "15px"
    }
});

export default function Profile(props) {
    const [anchor, setAnchor] = React.useState(null);
    const classes = useStyles();
    const handleOpen = (event) => {
        setAnchor(event.currentTarget);
    }
    const handleClose = () => {
        setAnchor(null);
    }
    return (
        <div>
            {(() => {
                if (props.type === "avatarButtonWithMenu") {
                    return (<div>
                        <IconButton className={classes.userAvatar} onClick={handleOpen}>
                            <Avatar alt="AS" src={ProfileImage} />
                        </IconButton>
                        <Menu id="profile-menu" anchorEl={anchor} keepMounted open={Boolean(anchor)}
                            onClose={handleClose}>
                            {props.menuOptions.map((menuItem, index) => (
                                <div>
                                    <MenuItem onClick={handleClose}>{menuItem}</MenuItem>
                                    {(index < props.menuOptions.length-1)? <Divider className={classes.menuItemSeparator} /> : ""}
                                </div>
                            ))}
                            
                        </Menu></div>
                    );
                } else {
                    return <Avatar alt="AS" src={ProfileImage} />;
                }
            })()
            }
        </div>

    );
}