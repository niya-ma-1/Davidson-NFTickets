import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions} from "@mui/material";


const TicketCard = (props) => {
    return <Box  sx={{ m:2 }} >
     <Card sx={{
        //maxWidth: 300, 
        //maxHeight: 300
        borderRadius: "20px",
        opacity: "100%",
        "&:hover": { transition: "0.5s", boxShadow: 10 }
        }}>
        <CardMedia
            component="img"
            height="140"
            image={props.imageURL}
            
        />
            <CardContent>
                <Typography gutterBottom variant="h10" component="div">
                Ticket #{props.ticketId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.concertName}, {props.location}, {props.seat}
                </Typography>
                <Button sx={{mt: 2}} size="small" variant="contained">Sell</Button>
            </CardContent>
    </Card>
</Box>
};

export default TicketCard;
    