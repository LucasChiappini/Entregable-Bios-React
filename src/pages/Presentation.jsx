import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PlayCircleFilledWhiteSharpIcon from "@mui/icons-material/PlayCircleFilledWhiteSharp";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Swal from "sweetalert2";
import "../pages/Presentation.css";
import { useNavigate } from "react-router-dom";

const Presentation = () => {
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#161B22",
      },
      secondary: {
        main: "#fff",
      },
    },
  });

  const ShowLoadingAlert = () => {
    let timerInterval;
    Swal.fire({
      title: "Loading...",
      html: "I will close in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
    navigate("/UserSearch");
  };

  return (
    <div className="container-presentation">
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "transparent",
        }}
      >
        <Box
          sx={{
            alignContent: "center",
            width: "78%",
          }}
        >
          <CardContent
            sx={{ flex: "1 0 auto", display: "flex", flexDirection: "column" }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                color: theme.palette.secondary.main,
                fontSize: "80px",
              }}
            >
              GitHub Searcher
            </Typography>
            <Typography
              variant="subtitle1"
              color={theme.palette.secondary.main}
              component="div"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Lets search from here!
            </Typography>
            <Button
              variant="contained"
              sx={{ bgcolor: "#7241C8", width: "30%" }}
              endIcon={<PlayCircleFilledWhiteSharpIcon />}
              onClick={ShowLoadingAlert}
            >
              Get started
            </Button>
            <CardContent sx={{ display: "flex", justifyContent: "start" }}>
              <a href="https://github.com/" target="blank">
                <i
                  className="fa-brands fa-square-github fa-spin fa-10x"
                  style={{ color: "#fff" }}
                >
                  {" "}
                </i>
              </a>
            </CardContent>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default Presentation;
