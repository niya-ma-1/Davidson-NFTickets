
import { Box, Typography, Grid, Button } from "@mui/material";

const Trending = (props) => {
    return <Box className="trending-card-wrapper" sx={{ "&:hover": { transition: "0.5s", boxShadow: 15, opacity: 15 } }}>
        <Box sx={{ position: "relative", borderRadius: "20px 20px 0px 0px", boxShadow: 3, background: `linear-gradient(to bottom right, ${props.color1}, ${props.color2})` }}>
            <Box className="trending-card" sx={{
                borderRadius: "20px", maxHeight: "300px", opacity: "15%", transition: "0.5s"
            }}>
                <img
                    className="trending-card-image"
                    src={props.imageURL} />
            </Box>
        </Box>
        <Grid container spacing={0} sx={{ px: 3, py: 2, m: "auto"}} justifyContent="center" alignItems="flex-end">
            <Grid item xs={10}>
                <Typography variant={"h6"} sx={ {fontWeight: 700 }}>{props.name}</Typography>
            </Grid>
            <Grid item xs={2} sx={{textAlign: "right"}}>
                <Typography variant={"p"}>{props.date}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" sx={{background: `linear-gradient(to bottom right, ${props.color1}, ${props.color2})`,
            "&:hover": {
                boxShadow: `0px 5px 15px ${props.color2}80`
            }
            }}>TICKETS</Button>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7} sx={{textAlign: "right"}}>
                <Typography variant="p" sx={{fontSize: 14}}>{props.location}</Typography>
            </Grid>
        </Grid>

    </Box>


};

export default Trending;