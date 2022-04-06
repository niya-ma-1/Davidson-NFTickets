import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import Nav from "../Components/Nav";
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    input: {
        color: "white"
    }
}));

const Create = (props) => {
    const classes = useStyles();
    const createContent = <Box sx={{ background: "#424242", p: 5, minHeight: "90vh" }}>
        <Box>
            <Typography variant={"h2"} sx={{ color: "white", ml: 2 }}>✏️ CREATE TICKETS</Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2, ml: 0 }}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField fullWidth label={"Event Name"} required variant="outlined" color="primary" InputLabelProps={{ sx: { color: "#d9d9d9" } }} sx={{ fieldset: { borderColor: "white", "&:hover": { borderColor: "blue" } }, input: { color: "white", borderColor: "white" } }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField fullWidth label={"Event Location"} required variant="outlined" color="primary" InputLabelProps={{ sx: { color: "#d9d9d9" } }} sx={{ fieldset: { borderColor: "white", "&:hover": { borderColor: "blue" } }, input: { color: "white", borderColor: "white" } }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField select SelectProps={{ MenuProps: { sx: { "MuiSelect-select": { color: "white !important" } } } }} fullWidth label={"Ticket Generation Method"} required variant="outlined" color="primary" InputLabelProps={{ sx: { color: "#d9d9d9" } }} sx={{ fieldset: { borderColor: "white", "&:hover": { borderColor: "blue" } }, input: { color: "white", borderColor: "white" } }} >
                    <MenuItem value={0}>Total Number</MenuItem>
                    <MenuItem value={1}>Row/Seat Numbers</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" sx={{
                    backgroundImage: "linear-gradient(to bottom right, #6FD9E8, #BA6FE8)",
                    backgroundSize: "150% auto",
                    color: "white",
                    transition: "0.5s",
                    "&:hover": {
                        boxShadow: "3px 5px 15px 2px #BA6FE830",
                        backgroundPosition: "right center",
                        
                    }
                }}>Create</Button>
            </Grid>
        </Grid>
    </Box>

    return <Nav content={createContent} />
}

export default Create;