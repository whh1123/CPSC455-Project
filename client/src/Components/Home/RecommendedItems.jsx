import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import SmallNav from './SmallNav';
import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getGenreProducts as gGP } from '../../redux/actions/productActions';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 12,
        background: '#FFFFFF'
    }, 
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    image: {
        width: 'auto',
        height: 150
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    wrapper: {
        padding: '25px 15px'
    },
    
}));

const MultiSlide = ({ temp }) => {
    const classes = useStyle();

    const [products, setProducts] = useState([]);
    // const genre = "Home";

    // // const getGenreProducts = useSelector(state => state.getGenreProducts);
    // const { data } = await axios.get(`http://localhost:8000/genre/${genre}`);;
    // console.log("here")
    // console.log(data)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(gGP(genre))
    // }, [dispatch])

    useEffect(()=>{
        async function fetchData() {
                const { data } = await axios.get(`http://localhost:8000/genre/${temp.text}`);
                console.log("hahahahahhahaahahahhahaha");
                console.log(data);
                setProducts(data);
        }
    
        // let timeoutId = setTimeout(() => {
        //     if (keyword) {
                fetchData();
        //     }
        //     console.log("hahahahahhahaahahahhahaha");
        // }, 300);
  
        // return () => {
        //    // if (keyword.length < 3) {
        //      //   setProducts([]);
        //     //}
        //     clearTimeout(timeoutId);
        // }
    
    },[]);
    
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
            </Box>
            <Divider />
            <SmallNav temp={temp}></SmallNav>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                

                {
                    products.map(t => (
                        <Link to={`/product/${t.id}`} style={{textDecoration: 'none'}}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={t.url} className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{t.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{t.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{t.tagline}</Typography>
                            </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Box>
    )
}

const RecommendedItems = (props) => {
    return (
        <>

            {
                props.multi === true ? <MultiSlide {...props} /> : ''      
            }
        </>
    )
}

export default RecommendedItems;