import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrders from '../MyOrders/MyOrders';
import { Button } from '@mui/material';
import './Dashboard.css';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddFood from '../AddFood/AddFood';
import useAuth from '../../../Hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';



const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    //admin non admin
    const { admin, user, logout } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box className='text-start'>
                <Link className='link-button' to='/home'><i class="fa-solid fa-house-flag ms-3 mb-4 mt-4"></i> <Button color="inherit">Go to Home</Button></Link>
            </Box>
            {
                admin ?
                    <Box className='text-start'>
                        <Link className='link-button' to={`${url}/makeAdmin`}><i class="fa-solid fa-user-gear ms-3 mb-4"></i> <Button color="inherit">Make Admin</Button></Link> <br />
                        <Link className='link-button' to={`${url}/addFood`}><i class="fa-solid fa-square-plus ms-3 mb-4"></i> <Button color="inherit">Add Food</Button></Link> <br />
                        <Link className='link-button' to={`${url}/manageAllOrders`}><i class="fa-solid fa-gear ms-3 mb-4"></i> <Button color="inherit">Manage All</Button></Link> <br />
                    </Box>
                    :
                    <Box className='text-start'>
                        <Link className='link-button' to={`${url}/myOrders`}><i class="fa-solid fa-square-plus ms-3 mb-4"></i> <Button color="inherit">My Orders</Button></Link>
                    </Box>
            }

            <Box>
                <i class="fa-solid fa-right-from-bracket"></i> <Button onClick={logout} color="inherit">Logout</Button>
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: 'black' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#DCCA87'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{color:'black'}} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: 'black' }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        backgroundColor: 'black'
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, backgroundColor: 'black'
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: 'black' }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route exact path={`${path}/addFood`}>
                        <AddFood></AddFood>
                    </Route>
                    <Route exact path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
