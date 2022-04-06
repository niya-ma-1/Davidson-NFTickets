import { Box, Grid, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


const SideBubble = (props) => {
    return <Box sx={{ width: "100px", mb: 2, justifyContent: "center", textAlign: "center", display: "flex" }} onClick={() => {
        window.location.href = props.url;
    }}>
        <Box className="side-bubble" sx={{ width: "90px", py: 0.5, borderRadius: "20px", display: "flex", justifyContent: "center" }}>
            <Box>
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    <Grid item xs={12} justifyContent="center" alignItems="center" display="flex">
                        <Box sx={{ width: "50px", height: "50px", boxShadow: 0, borderRadius: "25px", background: `linear-gradient(to bottom right, ${props.color1}, ${props.color2})`, alignItems: "center", boxShadow: 3, justifyContent: "center", display: "flex" }}>
                            {props.icon}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ color: "white", fontSize: 14, padding: 0, margin: 0, textAlign: "center", fontWeight: 700 }}>{props.page.toUpperCase()}</Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box>

    </Box>

}

export default SideBubble;