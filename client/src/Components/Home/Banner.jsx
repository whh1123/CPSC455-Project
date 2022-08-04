import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { bannerData } from '../../constant/data';


const useStyle = makeStyles(theme => ({
    container: {
    },
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))

const Banner = () => {

    const classes = useStyle();

    return (                     
        <Carousel 
            autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map(data => (
                    <Link to={`/product/${data.id}`} style={{textDecoration: 'none'}}>
                        <img src={data.image} className={classes.image} alt="" />
                    </Link>
                ))
            }
        </Carousel>
    )
}

export default Banner;