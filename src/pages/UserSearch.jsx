import { Box, Typography } from "@mui/material";
import "../pages/UserSearch.css";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import CardList from "../components/CardList";
import { useState } from "react";

const UserSearch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async (input) => {
    let newInputValue = input.inputValue;
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${newInputValue}`,
        {
          headers: {
            Authorization: `5ce7a0bd8ce46057b31d`,
          },
        }
      );
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className="container-userSearch">
      <NavigationBar />
      <Box sx={{display:"flex", justifyContent:'center', alignContent:'center'}}>
        <Typography variant="h1">User Searcher</Typography>
      </Box>
      <SearchBar add={fetchData} type='user'/>
      {users.length == 0 ? (
        <div className="element">
          <CardList list={users} type='user' />{" "}
        </div>
      ) : (
        <CardList list={users} type='user' />
      )}
    </div>
  );
};

export default UserSearch;
