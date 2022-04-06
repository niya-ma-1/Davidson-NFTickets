import { Backdrop, Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import Nav from "../Components/Nav";
import TextField from '@mui/material/TextField';
import { useState } from "react";


const Create = (props) => {

    const [generationType, setGenerationType] = useState(0);

    const formAdditions = () => {
        if (generationType === 1) {
            return <Grid item xs={4}>
                <TextField fullWidth label={"Number to be Created"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
            </Grid>
        } else if (generationType === 2) {
            return (
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label={"Section Number"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField fullWidth label={"Start Row"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField fullWidth label={"End Row"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth label={"Seats per Row"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <TextField label={"Starting Price"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                        </Grid>
                    </Grid>
                </Grid>

            )
        }
    }

    console.log(generationType);
    const createContent = <Box sx={{ background: "#424242", p: 5, minHeight: "91vh" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box>
                <Typography variant={"h2"} sx={{ color: "white", ml: 2 }}>✏️ CREATE TICKETS</Typography>
            </Box>
            <Grid container spacing={2} sx={{ mt: 0, ml: 0 }}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField fullWidth label={"Event Name"} required variant="outlined" color="primary" InputLabelProps={{ sx: { color: "#d9d9d9" } }} sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField fullWidth label={"Ticket Type"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField fullWidth label={"Event Location"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField select fullWidth label={"Ticket Generation Method"} required variant="outlined" color="primary" sx={{ fieldset: { borderColor: "#d9d9d9" } }} onChange={(e) => {
                        setGenerationType(e.target.value);
                    }}>
                        <MenuItem value={1}>Total Number</MenuItem>
                        <MenuItem value={2}>By Section</MenuItem>
                    </TextField>
                </Grid>
                {formAdditions()}
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
                    }}>Create Tickets</Button>
                </Grid>
            </Grid>
        </Box>
    </Box>

    return <Nav content={createContent} />
}

export default Create;