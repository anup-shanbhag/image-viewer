import React from 'react';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchPane: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center"
    },
    searchText: {
        marginRight: "5%",
        padding: "0.8%",
        borderRadius: "4px",
        width: "300px",
        backgroundColor: "#c0c0c0",
        color: "darkslategray"
    }
});

export default function Search(props) {
    const classes = useStyles();
    return (
        <Box className={classes.searchPane}>
            <Input disableUnderline className={classes.searchText}
                startAdornment={<InputAdornment position="start"><SearchIcon fontSize="large" />
                </InputAdornment>} placeholder="Search..." />
            {props.children}
        </Box>
    );

}


