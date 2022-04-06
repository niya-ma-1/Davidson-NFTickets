
import { Box, Typography, Grid, Button } from "@mui/material";

const Trending = (props) => {
    return <Box className="trending-card-wrapper" sx={{background: "#1E1E1E", "&:hover": { transition: "0.5s", boxShadow: 15, opacity: 15 } }}>
        <Box sx={{ position: "relative", borderRadius: "20px 20px 0px 0px", background: `linear-gradient(to bottom right, ${props.color1}, ${props.color2})` }}>
            <Box className="trending-card" sx={{
                borderRadius: "20px", maxHeight: "300px", opacity: "15%", transition: "0.5s"
            }}>
                <img
                    className="trending-card-image"
                    src={props.imageURL} />
            </Box>
        </Box>
        <Grid container spacing={0} sx={{ px: 3, py: 2, m: "auto" }} justifyContent="center" alignItems="flex-start">
            <Grid item xs={7}>
                <Typography variant={"h6"} sx={{ fontWeight: 700 }}>{props.name}</Typography>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: "right" }}>
                <Typography variant={"p"} color="#FFFFFFB3">{props.date}</Typography>
                <br/>
                <Typography variant="p" sx={{ fontSize: 14 }} color="#FFFFFFB3">{props.location}</Typography>
                <br/>
                <Button variant="contained" sx={{
                    mt: 0.5, background: `linear-gradient(to bottom right, ${props.color2}, ${props.color1})`, color: "white", "&:hover": {
                            boxShadow: 3,
                            backgroundPosition: "right center",
                    }
                }}>TICKETS</Button>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={4} sx={{textAlign: "right"}}>
            </Grid>
        </Grid>

    </Box>


};

export default Trending;