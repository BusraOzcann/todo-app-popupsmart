
import React from "react";
import * as Mui from "@mui/material";

import Icon from '@mdi/react';
import { mdiAccountCircle, mdiCalendarPlus } from '@mdi/react/Icon.js';

const drawerWidth = 240;
const navItems = [
    {icon: mdiAccountCircle, title: "Profile"},
    {icon: mdiCalendarPlus, title: "Add Note"}
];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Mui.Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Mui.Typography variant="h6" sx={{ my: 2 }}>
            TODO APP
        </Mui.Typography>
        <Mui.Divider />
        <Mui.List>
            {navItems.map((item,index) => (
            <Mui.ListItem key={index} disablePadding>
                <Mui.ListItemButton sx={{ textAlign: 'center' }}>
                <Mui.ListItemText primary={item.title} />
                </Mui.ListItemButton>
            </Mui.ListItem>
            ))}
        </Mui.List>
        </Mui.Box>
        );

        const container = window !== undefined ? () => window().document.body : undefined;

        return (
        <>
        <Mui.Box sx={{ display: 'flex' }}>
        <Mui.AppBar component="nav">
            <Mui.Toolbar>
            <Mui.IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}>
            </Mui.IconButton>
            <Mui.Grid container>
                <Mui.Grid item xs={4}>
                    <Mui.Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
                        TODO APP
                    </Mui.Typography>
                </Mui.Grid>

                <Mui.Grid item xs={8}>
                    <Mui.Box sx={{ display: { xs: 'none', sm: 'block' } }} style={{background: 'red'}}>
                        {navItems.map((item,index) => (
                            <Mui.Grid item xs={parseInt(12/navItems.length)} style={{background: 'blue'}}>
                                <Mui.Button key={index} sx={{ color: '#fff' }}>
                                    <Icon path={item.icon}/>
                                    {item.title}
                                </Mui.Button>
                            </Mui.Grid>
                        ))}
                    </Mui.Box>
                </Mui.Grid>

            </Mui.Grid>
        </Mui.Toolbar>
        </Mui.AppBar>
        <Mui.Box component="nav">
            <Mui.Drawer
            anchor="top"
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
            }}
            >
            {drawer}
            </Mui.Drawer>
        </Mui.Box>
        </Mui.Box>
        </>
        )
}

export default Header;