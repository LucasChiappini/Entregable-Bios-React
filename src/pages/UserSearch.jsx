import { Box, Typography } from "@mui/material";
import "../pages/UserSearch.css";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import CardList from "../components/CardList";
import { useState } from "react";
import Swal from "sweetalert2";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const fetchData = async (input) => {
    let newInputValue = input.inputValue;
    try {
      const response = await axios.get(
        `http://localhost:9000/api/users/${newInputValue}` //Todo centralizado en el backend.
      );
      setIsSearch(true);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-userSearch">
      <NavigationBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h1">User Searcher</Typography>
      </Box>
      <SearchBar add={fetchData} type="user" />
      {users.length == 0 ? (
        <div className="element">
          <CardList list={users} type="user" />{" "}
        </div>
      ) : isSearch == true && users.length == 0 ? (
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question",
        })
      ) : (
        <CardList list={users} type="user" />
      )}
    </div>
  );
};

export default UserSearch;
