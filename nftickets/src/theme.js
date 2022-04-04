
import { createTheme } from "@mui/material";


const theme = createTheme({
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
    }
});

export default theme;