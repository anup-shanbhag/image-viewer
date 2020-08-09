import React from 'react';
import { CardActions, IconButton, Typography, FormControl, Box, InputLabel, Input, Button } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textStrong: {
        fontWeight: 750
    },
    textLite: {
        fontWeight: 500
    },
    separator: {
        marginLeft: "15px",
        marginRight: "15px"
    },
    noBorderOrMargin: {
        margin: 'auto',
        padding: 0
    },
    pageFooter: {
        display: 'block'
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        width: '100%',
        marginRight: '2%'
    }
});

export default function PostFooter(props) {
    const [isLiked, setLiked] = React.useState(false);
    const [likes, setLikes] = React.useState(props.likes);
    const [commentText, setCommentText] = React.useState([]);
    const [comments, setComments] = React.useState([]);
    const classes = useStyles();
    const onLike = () => {
        (isLiked) ? setLikes(likes-1) : setLikes(likes+1);
        setLiked(!isLiked);
    }
    const onAddComment = () => {
        setComments([...comments, { id: comments.length + 1, text: commentText }]);
        setCommentText("");
    }
    const onAddCommentText = (e) => setCommentText(e.target.value);
    return (
        <CardActions className={classes.pageFooter}>
            <IconButton onClick={onLike} className={classes.noBorderOrMargin}>
                {(isLiked) ? <Favorite color="error" /> : <FavoriteBorderOutlined className={classes.noBorderOrMargin} />}
            </IconButton>
            <Typography variant="caption">{likes} likes</Typography>
            {comments.map(comment => (
                <Box key={comment.id} display="flex" alignItems="center">
                    <Typography variant="body2" className={classes.textStrong}>{props.postUser}: </Typography>
                    <Typography variant="body2" className={classes.textLite}>{comment.text}</Typography>
                </Box>
            ))}
            <FormControl fullWidth className={classes.commentContainer} margin="normal" size="medium" variant="standard">
                <InputLabel htmlFor="field-comment">Add a comment</InputLabel>
                <Input className={classes.textInput} id="field-comment" type="text" value={commentText} onChange={onAddCommentText} />
                <Button variant="contained" color="primary" id="btn-add" onClick={onAddComment}>ADD</Button>
            </FormControl>
        </CardActions>
    );
}