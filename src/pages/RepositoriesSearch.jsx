import { Box, Typography } from "@mui/material";
import "../pages/UserSearch.css";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import axios from "axios";
import CardList from "../components/CardList";

const RepostioriesSearch = () => {
  const [repositories, setRepositories] = useState([]);

  const fetchData = async (newSearch) => {
    let newInputValue = newSearch.inputValue;
    let newLanguage = newSearch.languages;
    let newDate = newSearch.selectedDate;
    let stringDate = newDate.toString();
    let date = new Date(stringDate);
    let year = date.getFullYear();
    let day = ("0" + date.getDate()).slice(-2)
    let month = ("0" + (date.getMonth() + 1)).slice(-2)
    let convertedDate = `${year}-${month}-${day}`;
    

    try {
      const response = await axios.get(
        `http://localhost:9000/api/repos/${newInputValue}/${newLanguage}/${convertedDate}`,
        {
          headers: {
            Authorization: `5ce7a0bd8ce46057b31d`,
          },
        }
      );
      setRepositories(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=".container-repositoriesSearch">
      <NavigationBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h1">Repositories Searcher</Typography>
      </Box>
      <SearchBar add={fetchData} type="repository" />
      {repositories.length == 0 ? (
        <div className="element">
          <CardList list={repositories} type="repository" />{" "}
        </div>
      ) : (
        <CardList list={repositories} type="repository" />
      )}
    </div>
  );
};

export default RepostioriesSearch;
