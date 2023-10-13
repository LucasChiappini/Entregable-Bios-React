import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CardList = ({ list, type }) => {
  const navigate = useNavigate();
  //Preguntar como obtener los otros datos de la API, en users.
  const getUsersList = () => {
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
            maxWidth: 360,
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
                  style={{ color: "#fff" }}
                >
                  Ver más
                </Link>
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    );
  };

  const getRepositoriesList = () => {
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
                  style={{ color: "#fff" }}
                >
                  Ver más
                </Link>
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
              sx={{ borderBottom: 1, borderColor: "#30363D"}}
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
                  sx={{ padding: "3px", color:'#fff' }}
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
export default CardList;
