import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { GitHub } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = ({ add, type }) => {
  const [inputValue, setinputValue] = useState("");
  const [languages, setLanguages] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const HandleSearchUser = () => {
    const newInputValue = { inputValue: inputValue };
    add(newInputValue);
  };

  const getSearchBarUser = () => {
    return (
      <Box sx={{ flexGrow: 1, border: 1, borderColor: "terciary.main" }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <IconButton href="/" target="blank" color="inherit">
              <GitHub />
            </IconButton>
            <Search
              sx={{
                border: 1,
                borderColor: "terciary.main",
                bgcolor: "primary.main",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon color="inherit" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onBlur={(e) => {
                  setinputValue(e.target.value);
                }}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "#30363D", color: "#fff" }}
                onClick={HandleSearchUser}
              >
                Search
              </Button>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  const handleChangeSelect = (event) => {
    setLanguages(event.target.value);
  };

  const handleSearchDate = (date) => {
    setSelectedDate(date);
  };

  const HandleSearchRepository = () => {
    const newSearch = {
      inputValue: inputValue,
      languages: languages,
      selectedDate: selectedDate,
    };
    add(newSearch);
  };

  const getSearchBarRepository = () => {
    return (
      <Box sx={{ flexGrow: 1, border: 1, borderColor: "terciary.main" }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <IconButton href="/" target="blank" color="inherit">
              <GitHub />
            </IconButton>
            <Box>
              <Typography>Languages➡️</Typography>
            </Box>
            <Box
              sx={{
                minWidth: 50,
                border: 1,
                borderColor: "#fff",
                margin: "3px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="iSelectLanguages" sx={{ color: "#fff" }}>
                  <ArrowDropDownIcon />
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={languages}
                  label="Languages"
                  onChange={handleChangeSelect}
                  sx={{ color: "#fff" }}
                >
                  <MenuItem value="javascript">Javascript</MenuItem>
                  <MenuItem value="phyton">Phyton</MenuItem>
                  <MenuItem value="java">Java</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{
                  border: 6,
                  background: "#fff",
                  margin: "5px",
                  borderRadius: "7px",
                }}
              >
                <DatePicker
                  label="Creation date📅"
                  value={selectedDate}
                  onChange={handleSearchDate}
                />
              </DemoContainer>
            </LocalizationProvider>

            <Search
              sx={{
                border: 1,
                borderColor: "terciary.main",
                bgcolor: "primary.main",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon color="inherit" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onBlur={(e) => {
                  setinputValue(e.target.value);
                }}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "#30363D", color: "#fff" }}
                onClick={HandleSearchRepository}
              >
                Search
              </Button>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  const SearchBarSelected = () => {
    if (type == "user") {
      return getSearchBarUser();
    } else if (type == "repository") {
      return getSearchBarRepository();
    }
  };

  SearchBar.propTypes = {
    add: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["user", "repository"]).isRequired,
  };

  return <Box component="div">{SearchBarSelected()}</Box>;
};
export default SearchBar;
