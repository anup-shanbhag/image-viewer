import React from 'react';
import { CardHeader, Typography } from '@material-ui/core';
import ProfileIcon from '../../common/profile/ProfileIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        margin: 'auto',
        paddingBottom: '0%',
        width: '100%',
        height: '0%'
    },
    postUser: {
        fontWeight: 750
    },
    postedTime: {
        fontWeight: 500
    }
    
});

export default function PostHeader(props) {
    const classes = useStyles();     
    return (
        <CardHeader className={classes.header} disableTypography
            avatar={<ProfileIcon type="avatarOnly" />}
            title={<Typography className={classes.postUser} variant="body1">{props.postUser}</Typography>}
            subheader={<Typography className={classes.postedTime} variant="subtitle2">{props.postedTime}</Typography>}>
        </CardHeader>
    );

}
