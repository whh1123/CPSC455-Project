import { Box, Typography, makeStyles, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';
import Seller from './Seller';

const useStyle = makeStyles({
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *' :{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    badge: {
        marginRight: 10,
        color: '#00CC00',
        fontSize: 15
    },
    wrapper: {
        display: 'flex'
    }
});

const ProductDetail = ({ product }) => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    // const data = export const getProductsByKeyword = async (request, response) => {
    // try {
    //     const keyword = request.params.keyword;
    //     const regex = new RegExp(keyword, 'ig');
    //     const products = await Product.find({ name: regex });
    //     response.json(products);
    // }catch (error) {
    //     console.log(error)
    // }
//}
    return (
        <>
            <Table>
                <TableBody>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;