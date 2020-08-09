import React from 'react';
import { CardContent, CardMedia, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imageContainer: {
        margin: 'auto',
        paddingBottom: '1%',
        minHeight: 450,
        minWidth: 450,
        height: '100%',
        width: '100%'
    },
    caption: {
        color: 'black',
    },
    hashtags: {
        color: 'blue'
    },
    separator: {
        marginTop: '3%',
        marginBottom: '2%'
    }
});

export default function PostContent(props) {
    const classes = useStyles();
    let hashtags = props.text.split(' ').filter(str => str.startsWith('#')).join(' ');
    let caption = props.text.split(' ').filter(str => !str.startsWith('#')).join(' ');
    return (
        <CardContent>
            <CardMedia className={classes.imageContainer} image={props.media} title={props.mediaId} />
            <Divider className={classes.separator}/>
            <Typography className={classes.caption} variant="subtitle1">{caption}</Typography>
            <Typography className={classes.hashtags} variant="subtitle2">{hashtags}</Typography>
        </CardContent>
    );

}