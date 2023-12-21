import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { GitHub } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleClickPresentation = () => {
    navigate("/");
  };

  const handleclickUser = () => {
    navigate("/UserSearch");
  };

  const handleclickRepositories = () => {
    navigate("/RepositoriesSearch");
  };

  const handleclickCrud = () => {
    navigate("/Management");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ borderBottom: 1, borderColor: "#30363D" }}
      >
        <Toolbar>
          <MenuItem sx={{ gap: "5px" }}>
            <Button
              component="label"
              variant="contained"
              startIcon={<GitHub />}
              onClick={handleClickPresentation}
            >
              GitHub Searcher
            </Button>

            <Button color="inherit" onClick={handleclickUser}>
              User
            </Button>
            <Button color="inherit" onClick={handleclickRepositories}>
              Repositories
            </Button>

            <Button color="inherit" onClick={handleclickCrud}>
              Management
            </Button>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
