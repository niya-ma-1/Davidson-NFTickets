import { Backdrop, Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import Nav from "../Components/Nav";
import TextField from '@mui/material/TextField';
import { useState } from "react";


const Login = (props) => {

    const loginContent = <Box sx={{ background: "#424242", p: 5, minHeight: "91vh" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box>
                <Typography variant={"h2"} sx={{ color: "white", ml: 2 }}>LOG IN</Typography>
            </Box>
            
            <Grid container spacing={2} sx={{ mt: 0, ml: 0 }}>
                <Grid item xs={12}>
                    <TextField label={"Username"} required variant="outlined" color="primary"  sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={"Password"} type="password" autoComplete="current-password" required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" sx={{
                        mt: 1,
                        backgroundImage: "linear-gradient(to bottom right, #6FD9E8, #BA6FE8)",
                        backgroundSize: "150% auto",
                        color: "white",
                        transition: "0.5s",
                        fontSize: "18px",
                        fontWeight: 700,
                        "&:hover": {
                            boxShadow: "3px 5px 15px 2px #BA6FE830",
                            backgroundPosition: "right center",

                        }
                    }}>Log In</Button>
                </Grid>
            </Grid>
        </Box>
    </Box>

    return <Nav content={loginContent} />
}

export default Login;