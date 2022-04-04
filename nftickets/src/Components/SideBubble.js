import { Box, Grid, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


const SideBubble = (props) => {
    return <Box sx={{ width: "140px", justifyContent: "center", mb: 2, py: 0.5, textAlign: "center", display: "flex" }}>
        <Box className="side-bubble" p={1} sx={{ borderRadius: "20px", width: "130px", display: "flex", justifyContent: "center" }}>
            <Box>
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    <Grid item xs={12} justifyContent="center" alignItems="center" display="flex">
                        <Box sx={{ width: "80px", height: "80px", boxShadow: 0, borderRadius: "100%", background: `linear-gradient(to bottom right, ${props.color1}, ${props.color2})`, alignItems: "center", justifyContent: "center", display: "flex" }}>
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