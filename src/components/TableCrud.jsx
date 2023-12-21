import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StorageIcon from "@mui/icons-material/Storage";
import ModalPopUp from "./ModalPopUp";
import { useState } from "react";

const TableCrud = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRepoId, setSelectedRepoId] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  const tableUser = () => {
    const handleClickEditUser = (id) => {
      setSelectedUserId(id);
      setIsModalOpen(true);
    };

    const handleAddData = (newData) => {
      props.handleEdit(newData);
    };

    return (
      <>
        <TableContainer component={Table}>
          <Box sx={{ marginBottom: "2%", marginTop: "2%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                bgcolor: "#00684A",
                color: "#fff",
                border: 2,
                borderColor: "#30363D",
              }}
            >
              <Typography variant="h1">
                {props.title} <StorageIcon fontSize="large" />
              </Typography>
            </Box>
            <Table
              sx={{
                minWidth: 650,
                bgcolor: "#161B22",
                border: 2,
                borderColor: "#30363D",
              }}
              aria-label="data table"
            >
              <TableHead>
                <TableRow
                  sx={{ border: 1, borderStyle: "solid", color: "#fff" }}
                >
                  <TableCell sx={{ color: "#fff" }}>{props.titleOne}</TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    {props.titleTwo}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    {props.titleThree}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    {props.titleFour}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    {props.titleFive}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    EDIT🖋️
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="left">
                    DELETE🗑️
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.list.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                        color: "#fff",
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#fff" }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {item.bio}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {item.email}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {item.location}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {item.followers}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {" "}
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "#FFC009", color: "#fff" }}
                        onClick={() => {
                          handleClickEditUser(item._id);
                        }}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "#DA3633", color: "#fff" }}
                        onClick={() => {
                          props.handleDelete(item._id);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TableContainer>
        {isModalOpen && (
          <ModalPopUp
            id={selectedUserId}
            handleClose={handleCloseModal}
            add={handleAddData}
            title="Edit user👤"
            labelOne="Name"
            labelTwo="Bio"
            labelThree="Email"
            labelFour="Location"
            labelFive="Followers"
          />
        )}
      </>
    );
  };

  const tableRepositories = () => {
    const handleClickEditRepo = (id) => {
      setSelectedRepoId(id);
      setIsModalOpen(true);
    };

    const handleAddData = (newData) => {
      props.handleEdit(newData);
    };

    return (
      <>
        <TableContainer component={Table}>
          <div>
            <Box sx={{ marginBottom: "2%", marginTop: "2%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  bgcolor: "#00684A",
                  color: "#fff",
                  border: 2,
                  borderColor: "#30363D",
                }}
              >
                <Typography variant="h1">
                  {props.title} <StorageIcon fontSize="large" />
                </Typography>
              </Box>
              <Table
                sx={{
                  minWidth: 650,
                  bgcolor: "#161B22",
                  border: 2,
                  borderColor: "#30363D",
                }}
                aria-label="data table"
              >
                <TableHead>
                  <TableRow
                    sx={{ border: 1, borderStyle: "solid", color: "#fff" }}
                  >
                    <TableCell sx={{ color: "#fff" }}>
                      {props.titleOne}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {props.titleTwo}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {props.titleThree}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {props.titleFour}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      {props.titleFive}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      EDIT🖋️
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="left">
                      DELETE🗑️
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.list.map((item) => (
                    <TableRow
                      key={item._id}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                          color: "#fff",
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "#fff" }}
                      >
                        {item.name}
                      </TableCell>
                      <TableCell sx={{ color: "#fff" }} align="left">
                        {item.description}
                      </TableCell>
                      <TableCell sx={{ color: "#fff" }} align="left">
                        {item.createdDate}
                      </TableCell>
                      <TableCell sx={{ color: "#fff" }} align="left">
                        {item.watchers}
                      </TableCell>
                      <TableCell sx={{ color: "#fff" }} align="left">
                        {item.forks}
                      </TableCell>
                      <TableCell sx={{ color: "#fff" }} align="left">
                        {" "}
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "#FFC009", color: "#fff" }}
                          onClick={() => {
                            handleClickEditRepo(item._id);
                          }}
                        >
                          <EditIcon />
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "#DA3633", color: "#fff" }}
                          onClick={() => {
                            props.handleDelete(item._id);
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </div>
        </TableContainer>
        {isModalOpen && (
          <ModalPopUp
            id={selectedRepoId}
            handleClose={handleCloseModal}
            add={handleAddData}
            title="Edit repository📁"
            labelOne="Name"
            labelTwo="Description"
            labelThree="Created Date"
            labelFour="Watchers"
            labelFive="Forks"
          />
        )}
      </>
    );
  };

  const tableSelected = () => {
    if (props.type == "user") {
      return tableUser();
    } else if (props.type == "repository") {
      return tableRepositories();
    }
  };

  TableCrud.propTypes = {
    type: PropTypes.oneOf(["user", "repository"]).isRequired,
    title: PropTypes.string.isRequired,
    titleOne: PropTypes.string.isRequired,
    titleTwo: PropTypes.string.isRequired,
    titleThree: PropTypes.string.isRequired,
    titleFour: PropTypes.string.isRequired,
    titleFive: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string,
        location: PropTypes.string,
        followers: PropTypes.number,
        description: PropTypes.string,
        createdDate: PropTypes.string,
        watchers: PropTypes.number,
        forks: PropTypes.number,
      })
    ).isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };

  return <Box component="div">{tableSelected()}</Box>;
};
export default TableCrud;
