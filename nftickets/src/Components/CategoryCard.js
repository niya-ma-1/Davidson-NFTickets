
import { Box, Typography } from "@mui/material";

const CategoryCard = (props) => {
    return <Box className="feature-card" sx={{ position: "relative", borderRadius: "20px", background: `linear-gradient(to bottom right, ${props.color1}, ${props.color2})`, "&:hover": { boxShadow: 10, opacity: 15, transition: "0.3s" } }}>
    <Box sx={{ position: "absolute", width: "100%", bottom: "40%", opacity: "100%" }}>
        <Typography variant={"h6"} className="feature-card-text" sx={{ textAlign: "center", color: "white", fontWeight: 700, pointerEvents: "none" }}>{props.category}</Typography>
    </Box>
    <Box sx={{
        borderRadius: "20px", maxHeight: "300px", opacity: "20%", transition: "0.3s", "&:hover": {
            opacity: "5%"
        }
    }}>
        <img
            className="feature-card-image"
            src={props.imageURL} />
        <Box sx={{ position: "absolute", width: "100%", bottom: "40%", opacity: "100%" }}>
            <Typography variant={"h6"} className="feature-card-text" sx={{ textAlign: "center", color: "white", fontWeight: 700, pointerEvents: "none" }}>{props.category}</Typography>
        </Box>
    </Box>
</Box>
};

export default CategoryCard;