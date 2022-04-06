
import { createTheme } from "@mui/material";


const theme = createTheme({

    palette: {
        mode: "dark",
        primary: { main: "#6FD9E8" },
        secondary: { main: "#BA6FE8" }
    },
    zIndex: {
        appBar: 1400
    },
    typography: {
        fontFamily: "Montserrat",
        h1: {
            fontSize: "84px",
            fontWeight: "700"
        },
        h2: {
            fontSize: "38px",
            fontWeight: "700"
        },
        h3: {
            fontSize: "28px",
            fontWeight: "700"
        }
    },


});

export default theme;