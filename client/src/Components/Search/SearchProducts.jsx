import { Box, makeStyles } from '@material-ui/core';
import Slide from '../Home/Slide';
import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getGenreProducts as gGP } from '../../redux/actions/productActions';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const SearchProducts = ({ match }) => {

    const classes = useStyle();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async() => {
            const { data } = await axios.get(`http://localhost:8000/search/${match.params.keyword}`)
            setProducts(data);
        }
        fetchProducts();
    },[match])

    return (
        <> 
            <Box className={classes.component}>
                <Slide
                    data={products} 
                    title={match.params.keyword}
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default SearchProducts;