import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <ul>
            <li>
                <a href="/myinfo/account">Account</a>
            </li>
            <li>
                <a href="/myinfo/selling">Selling</a>
            </li>
        </ul>
        // <>
        //     <Link to='account'>Account</Link>
        //     <Link to='selling'>Selling</Link>
        // </>
    )
}

export default Navbar;