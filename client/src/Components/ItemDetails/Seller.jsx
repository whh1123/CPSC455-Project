import { Box, Typography, makeStyles, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

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

const Seller = ({ product }) => {
    const classes = useStyle();
    const seller = product.sellerID;
    <TableRow className={classes.smallText}>
    <TableCell className={classes.greyTextColor}>Seller</TableCell>
    <TableCell className={classes.smallText}>
        <span style={{ color: '#2874f0' }}>{seller.username}</span>
        <Typography>Phone: {seller.phone}</Typography>
        <Typography>Email: {seller.email}</Typography>
    </TableCell>
</TableRow>

}

export default Seller;