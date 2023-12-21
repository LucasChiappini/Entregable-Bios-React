import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StorageIcon from "@mui/icons-material/Storage";
import axios from "axios";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CardList = ({ list, type }) => {
  const navigate = useNavigate();
  //Preguntar como obtener los otros datos de la API, en users.
  const getUsersList = () => {
    const fetchDataSpecific = async (name) => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/userSpecific/${name}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const AddUser = async (name) => {
      try {
        const user = await fetchDataSpecific(name);
        const data = new URLSearchParams();
        data.append("name", user.name);
        data.append("bio", user.bio);
        data.append("email", user.email);
        data.append("location", user.location);
        data.append("followers", user.followers);

        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };

        const response = await axios.post(
          "http://localhost:9000/api/users",
          data,
          config
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User added 👤✅",
          showConfirmButton: false,
          timer: 1500,
        });
        return response.data.result;
      } catch (error) {
        // Manejo de errores
        console.error("Error al obtener usuarios:", error);
        throw error;
      }
    };

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "5px",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 660,
            bgcolor: "#161B22",
            border: 1,
            borderColor: "#30363D",
          }}
        >
          {list.map((item) => (
            <Box
              key={item.id}
              sx={{ borderBottom: 1, borderColor: "#30363D" }}
              component="div"
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={item.avatar_url}
                      alt="Avatar image"
                      width="100%"
                    ></img>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.login}
                  secondary={item.url.followers}
                />
                <Link
                  to={`/UserSearch/UserDetails/${item.id}/${item.login}`}
                  style={{ color: "#fff", paddingRight: "7px" }}
                >
                  Ver más
                </Link>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#00684A" }}
                  onClick={() => AddUser(item.login)} //No se ejecuta, Se declara una funcion.
                >
                  ADD TO DATABASE <StorageIcon />
                </Button>
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    );
  };

  const getRepositoriesList = () => {
    const AddRepo = async (name, description, createdDate, watchers, forks) => {
      try {
        let date = new Date(createdDate);
        let year = date.getFullYear();
        let day = ("0" + date.getDate()).slice(-2);
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let convertedDate = `${year}-${month}-${day}`;
        const data = new URLSearchParams();
        data.append("name", name);
        data.append("description", description);
        data.append("createdDate", convertedDate);
        data.append("watchers", watchers);
        data.append("forks", forks);

        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };

        const response = await axios.post(
          "http://localhost:9000/api/repos",
          data,
          config
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Repository added✅",
          showConfirmButton: false,
          timer: 1500,
        });
        return response.data.result;
      } catch (error) {
        // Manejo de errores
        console.error("Error al obtener repositorios:", error);
        throw error;
      }
    };

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "5px",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 900,
            bgcolor: "#161B22",
            border: 1,
            borderColor: "#30363D",
          }}
        >
          {list.map((item) => (
            <Box
              key={item.id}
              sx={{ borderBottom: 1, borderColor: "#30363D" }}
              component="div"
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={item.owner.avatar_url}
                      alt="Avatar image"
                      width="100%"
                    ></img>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`Repository name➡️${item.name}`}
                  sx={{ padding: "3px" }}
                />
                <Link
                  to={`/RepositoriesSearch/RepositoryDetails/${item.id}/${item.name}/${item.language}/${item.created_at}`}
                  style={{ color: "#fff", paddingRight: "7px" }}
                >
                  Ver más
                </Link>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#00684A" }}
                  onClick={() =>
                    AddRepo(
                      item.name,
                      item.description,
                      item.created_at,
                      item.watchers,
                      item.forks
                    )
                  }
                >
                  ADD TO DATABASE <StorageIcon />
                </Button>
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    );
  };

  const getShowMoreUserList = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "5px",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 900,
            bgcolor: "#161B22",
            border: 1,
            borderColor: "#30363D",
          }}
        >
          {list.map((item) => (
            <Box
              key={item.id}
              sx={{ borderBottom: 1, borderColor: "#30363D" }}
              component="div"
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={item.avatar_url}
                      alt="Avatar image"
                      width="100%"
                    ></img>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ padding: "3px", color: "#fff" }}
                  primary={`${item.login}`}
                  secondary={`Type:${item.type}`}
                />
                <Box sx={{ padding: "3px", width: "30%" }}>
                  <ListItemText primary={item.bio} />
                </Box>

                <Button
                  variant="contained"
                  sx={{ bgcolor: "#2EA043", width: "30%" }}
                >
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff" }}
                  >
                    profile
                    <PersonIcon />
                  </a>
                </Button>
              </ListItem>
            </Box>
          ))}
        </List>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2EA043",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          onClick={HandleClickGoBackUser}
        >
          <ArrowBackIcon /> Go Back
        </Button>
      </Box>
    );
  };

  const HandleClickGoBackUser = () => {
    navigate("/UserSearch");
  };

  const getShowMoreRepositoryList = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "5px",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 900,
            bgcolor: "#161B22",
            border: 1,
            borderColor: "#30363D",
          }}
        >
          {list.map((item) => (
            <Box
              key={item.id}
              sx={{ borderBottom: 1, borderColor: "#30363D" }}
              component="div"
            >
              <ListItem sx={{ color: "#fff" }}>
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={item.owner.avatar_url}
                      alt="Avatar image"
                      width="100%"
                    ></img>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.name}`}
                  secondary={`👤 ${item.owner.login}`}
                  sx={{ padding: "3px" }}
                />
                <Box sx={{ padding: "3px", width: "30%" }}>
                  <ListItemText
                    primary={item.description}
                    secondary={`⭐ ${item.stargazers_count}`}
                  />
                </Box>

                <Box sx={{ padding: "3px", width: "30%" }}>
                  <ListItemText
                    primary={`Languages:${item.language}`}
                    secondary={`⤴️${item.forks}`}
                  />
                  <ListItemText
                    primary={`👁️${item.watchers}`}
                    secondary={`Visibility:${item.visibility}`}
                  />
                </Box>
              </ListItem>
            </Box>
          ))}
        </List>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2EA043",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          onClick={HandleClickGoBackRepository}
        >
          <ArrowBackIcon /> Go Back
        </Button>
      </Box>
    );
  };

  const HandleClickGoBackRepository = () => {
    navigate("/RepositoriesSearch");
  };

  const listSelected = () => {
    if (type == "user") {
      return getUsersList();
    } else if (type == "repository") {
      return getRepositoriesList();
    } else if (type == "specificUser") {
      return getShowMoreUserList();
    } else if (type == "specificRepository") {
      return getShowMoreRepositoryList();
    }
  };

  return <Box component="div">{listSelected()}</Box>;
};
CardList.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string,
};
export default CardList;
