import { Box, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const SmallNav = ({ temp }) => {
    const classes = useStyle();
    return (
           
        <Box className={classes.container}>
            <Link style={{textDecoration: 'none'}} to={`/genre/${temp.text.split(' ').join('-')}`}>
            <img src={temp.url} className={classes.image} alt="" />
            <Typography className={classes.text}>{temp.text}</Typography>
            </Link>
        </Box>

    )
}

export default SmallNav;