import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions} from "@mui/material";


const TicketCard = (props) => {
    return <Box  sx={{ ml:2,  "&:hover": { transition: "0.5s", boxShadow: 10, opacity: 15, ml:2 } }} >
     <Card sx={{
        //maxWidth: 300, 
        //maxHeight: 300
        width: '15vw',
        height: '29vh'
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
            </CardContent>
        <CardActions>
            <Button size="small" variant="contained">Sell</Button>
        </CardActions>
    </Card>
</Box>
};

export default TicketCard;
    