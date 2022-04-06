import { Backdrop, Box, Button, Grid, MenuItem, Select, Typography, ListItem, IconButton, ListItemText, Card, CardMedia, CardContent, CardActions} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import Trending from "../Components/Trending";
import CategoryCard from "../Components/CategoryCard";
import TicketCard from "../Components/TicketCard";
import Nav from "../Components/Nav";
import TextField from '@mui/material/TextField';
import { useState } from "react";


const Profile = (props) => {

    const profileContent = 
    <Box sx={{ background: "#424242", p: 5, minHeight: "91vh" }}>
        <Box>
            <Typography variant={"h2"} sx={{ color: "white", ml: 2 , mb: 5}}>👤 PROFILE</Typography>
        </Box>
        <Box>
            <Typography variant={"h3"} sx={{ color: "white", ml: 2, mb:1}}>CURRENT TICKETS</Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5 }}>
            <TicketCard ticketId="123" concertName="Concert Name" location="Davidson, NC" seat="Sec. 118 K8" imageURL="https://cdn1.matadornetwork.com/blogs/1/2010/08/deadliest-concerts-940x626.jpg"/>
            <TicketCard ticketId="124" concertName="Concert Name" location="Davidson, NC" seat="Sec. 118 K8" imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg"/>
        </Box>
        <Box >
            <Typography variant={"h3"} sx={{ color: "white", ml: 2, mb:1}}>PAST TICKETS</Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5 }}>
            <TicketCard ticketId="125" concertName="Concert Name" location="Davidson, NC" seat="Sec. 118 K8" imageURL="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/astroworld-kb-main-211109-27be2c.jpg"/>
        </Box>
        
    </Box>

    return <Nav content={profileContent} />
}

export default Profile;