import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideBubble from './SideBubble';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = 150;

function Nav(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box sx={{ p: 2, width: "100%", height: "50px", mb: 3 }}>
                <Typography variant='h6' sx={{ color: "white", fontWeight: "700", textAlign: "center", display: { xs: "none", sm: "none", md: "flex" } }}>NFTICKETS</Typography>
            </Box>
            {['home', 'market', 'create', 'profile'].map((text, index) => {
                let color1 = "";
                let color2 = "";
                let icon = <HomeIcon />
                if (text === "home") {
                    color1 = "#C3F7FE";
                    color2 = "#6FD9E8";
                    icon = <HomeIcon sx={{
                        width: "80px",
                        textAlign: "center",
                        fontSize: "36px",
                        fill: "white"
                    }} />
                } else if (text === "market") {
                    color1 = "#E7BFFF"
                    color2 = "#BA6FE8"
                    icon = <StorefrontIcon sx={{
                        width: "80px",
                        textAlign: "center",
                        fontSize: "36px",
                        fill: "white"
                    }} />
                } else if (text === "profile") {
                    color1 = "#93E186"
                    color2 = "#46DE4C"
                    icon = <PersonIcon sx={{
                        width: "80px",
                        textAlign: "center",
                        fontSize: "36px",
                        fill: "white"
                    }} />
                } else if (text === "create") {
                    color1 = "#6D7CFF"
                    color2 = "#4671DE"
                    icon = <AddIcon sx={{
                        width: "80px",
                        textAlign: "center",
                        fontSize: "36px",
                        fill: "white"
                    }} />
                }

                return <SideBubble page={text} color1={color1} color2={color2} icon={icon} />;
            }
            )}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: "100%",
                    background: "#424242",
                    stroke: "none"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" sx={{ color: "white", fontWeight: "700", textAlign: "center", display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" } }}>
                        NFTICKETS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "#424242", stroke: "none" },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "#424242", stroke: "none" },
                    }}
                    open

                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {props.content}
            </Box>
        </Box>
    );
}


export default Nav;