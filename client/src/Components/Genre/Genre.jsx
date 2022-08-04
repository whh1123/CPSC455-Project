import { Box, makeStyles } from '@material-ui/core';
import Slide from '.././Home/Slide';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getGenreProducts as gGP } from '../../redux/actions/productActions';


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Genre = ({ match }) => {

    const genre = match.params.genre;

    const classes = useStyle();

    const getGenreProducts = useSelector(state => state.getGenreProducts);
    const { products } = getGenreProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(gGP(genre))
    }, [dispatch])

    return (
        <> 
            <Box className={classes.component}>
                <Slide
                    data={products} 
                    title={genre}
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Genre;