import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          style={{
            backgroundImage: "linear-gradient(rgb(0 0 0 / 45%), rgb(0, 0, 0))",
            borderRadius: "15px",
            color: "white",
          }}
          sx={{
            height: "80vh",
            width: "40vw",
            padding: "20px",
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
