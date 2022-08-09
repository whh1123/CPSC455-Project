import React from 'react';
import Navbar from "./Navbar";

import Selling from './Selling';
import { BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch } from 'react-router-dom';
import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    navLinks: {
        width: '100%',
        backgroundColor: 'transparent',
        listStyle: 'none',
        justifyContent: 'space-around',
        display: 'flex',
        fontWeight: 600,
        '& li': {
            fontSize: '2em',
            cursor: 'pointer',
            // '& ::after': {
            //     content: "",
            //     display: 'block',
            //     width: 0,
            //     height: '2px',
            //     background: '#000000',
            //     transition: 'width 0.3s'
            // }
            '& NavLink': {
                textDecoration: 'none'
            }
        }
    },
    // navLinks: {
    //     '& li': {
    //         fontSize: '0.9em',
    //         cursor: 'pointer'
    //     }
    // },
    activlink: {
        // '& li': {
            content: "",
            display: 'block',
            width: 0,
            height: '2px',
            background: '#000000',
            transition: 'width 0.3s',
            width: '100%'
        // }
    },
    // nav: {
    //     width: '100%',
    //     position: 'fixed',
    //     top: 0,
    //     height: '70px',
    //     alignItems: 'center',
    //     fontSize: '1.1em',
    //     fontWeight: 600,
    //     display: 'flex',
    //     backgroundColor: 'transparent',
    //     transition: 'all 0.5s linear',
    //     zIndex: 1000,
    //     '& active': {
    //         background: 'white',
    //         boxShadow: '0 5px 5px -2px rgba(0, 0, 0, 0.4)'
    //     }
    // }
    }));

const Myinfo = () => {

    // let component;
    // switch (window.location.pathname) {
    //     case "/":
    //         component = <Account />
    //         break
    //     case "/account":
    //         component = <Account />
    //         break
    //     case "/selling":
    //         component = <Selling />
    //         break
    // }

    const classes = useStyle();

    let { path, url } = useRouteMatch();


    return (
        <> 
           {/* <h1>MyInfo</h1>
            <nav>
                <Link to='account'>Account</Link>
                <Link to='selling'>Selling</Link>
            </nav> */}
            <div>
                
                
                <h2>My Info</h2>
              
                <ul className={classes.navLinks}>
                    <li>
                    <NavLink activeClassName={classes.activlink} to={`${url}/account`}>Account</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName={classes.activlink} to={`${url}/selling`}>Selling</NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route exact path={path}>
                    </Route>
                    <Route path={`${path}/account`}>
                    
                    </Route>
                    <Route path={`${path}/selling`}>
                    <Selling />
                    </Route>
                </Switch>
             
            </div>
        </>
    )
}

export default Myinfo;