import { Box, Button, Typography, Grid } from "@mui/material";
import CategoryCard from "../Components/CategoryCard";
import Nav from "../Components/Nav";
import Trending from "../Components/Trending";



const Home = (props) => {
    const HomeContent = <div>
        <Box sx={{ width: "100%", minHeight: "75vh", background: "linear-gradient(100.85deg, #6FD9E8 0%, #BA6FE8 100%)", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid container spacing={1} sx={{ p: 5 }}>
                <Grid item xs={12}>
                    <Typography variant="h1" sx={{ color: "white" }}>THE FUTURE IS HERE.</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Button id="home-button" variant="outlined" sx={{
                        borderRadius: "10px", color: "white", border: "solid 1px white", fontSize: 18, '&:hover': {
                            background: "white",
                            color: "#BA6FE8",
                            border: "solid 1px transparent",
                            boxShadow: 3
                        },

                    }}>
                        Buy Tickets
                    </Button>
                </Grid>

            </Grid>
        </Box>
        <Box sx={{ background: "#424242", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>

            <Grid container spacing={2} sx={{ p: 5 }}>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{ color: "white" }}>
                    🔥 TRENDING
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Trending name="(MBB) Davidson vs. Fordham" date={"3/8/22"} location="Davidson, NC" color1="#494949" color2="#ac1a2f" imageURL={"https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Trending name={"[Concert Name]"} date={"5/12/22"} location="Charlotte, NC" color1="#4671DE" color2="#BA6FE8" imageURL={"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Trending name={"[Concert Name]"} date={"6/6/22"} location="Charlotte, NC" color1="#494949" color2="#000000" imageURL={"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"} />
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{ color: "white" }}>
                    🗂 CATEGORIES
                    </Typography>    
                </Grid>
                <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <CategoryCard category={"BASKETBALL"} color1="#6FD9E8" color2="#BA6FE8" imageURL={"https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <CategoryCard category={"CONCERTS"} color1="#4671DE" color2="#BA6FE8" imageURL={"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <CategoryCard category={"FOOTBALL"} color1="#BA6FE8" color2="#6FD9E8" imageURL={"https://images.unsplash.com/photo-1537882111161-c3379a777c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <CategoryCard category={"SOCCER"} color1="#BA6FE8" color2="#4671DE" imageURL={"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"} />
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Box>
    </div>




    return <Nav content={HomeContent}></Nav>
}

export default Home;