
import { Box, Typography } from "@mui/material";

const CategoryCard = (props) => {
    return <Box className="feature-card" sx={{ position: "relative", borderRadius: "20px", background: `linear-gradient(to bottom right, ${props.color1}, ${props.color2})`, "&:hover": { transition: "0.5s", boxShadow: 10, opacity: 15 } }}>
    <Box sx={{ position: "absolute", width: "100%", bottom: "40%", opacity: "100%" }}>
        <Typography variant={"h6"} className="feature-card-text" sx={{ textAlign: "center", color: "white", fontWeight: 700, pointerEvents: "none" }}>{props.category}</Typography>
    </Box>
    <Box sx={{
        borderRadius: "20px", maxHeight: "300px", opacity: "15%", transition: "0.5s", "&:hover": {
            opacity: "4%"
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