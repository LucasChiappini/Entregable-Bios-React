import "../pages/Crud.css";
import NavigationBar from "../components/NavigationBar";
import TableCrud from "../components/TableCrud";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Swal from "sweetalert2";
const Crud = () => {
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);
  //-------------USERS ARROWS FUNCTIONS------------------------------
  const fetchDataUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/users`);
      setUsers(response.data.result.users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User eliminated 👤🗑️",
        showConfirmButton: false,
        timer: 1500,
      });
      await axios.delete(`http://localhost:9000/api/users/${id}`);
      await fetchDataUsers();
    } catch (error) {
      console.error("Error al intentar eliminar el dato", error);
    }
  };

  const handleEditUser = async (newData) => {
    try {
      const updatedUserData = {
        name: newData.inputOne,
        bio: newData.inputTwo,
        email: newData.inputThree,
        location: newData.inputFour,
        followers: newData.inputFive,
      };

      await axios.put(
        `http://localhost:9000/api/users/${newData.id}`,
        updatedUserData
      );
      await fetchDataUsers();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${newData.inputOne} has been edited `,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error al editar el usuario", error);
    }
  };

  //-------------REPOSITORIES ARROWS FUNCTIONS------------------------------
  const fetchDataRepositories = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/repos`);
      setRepositories(response.data.result.repos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRepo = async (id) => {
    try {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Repo eliminated 📁🗑️",
        showConfirmButton: false,
        timer: 1500,
      });
      await axios.delete(`http://localhost:9000/api/repos/${id}`);
      await fetchDataRepositories();
    } catch (error) {
      console.error("Error al intentar eliminar el repositorio", error);
    }
  };

  const handleEditRepo = async (newData) => {
    try {
      const updatedRepoData = {
        name: newData.inputOne,
        description: newData.inputTwo,
        createdDate: newData.inputThree,
        watchers: newData.inputFour,
        forks: newData.inputFive,
      };

      await axios.put(
        `http://localhost:9000/api/repos/${newData.id}`,
        updatedRepoData
      );
      await fetchDataRepositories();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${newData.inputOne} has been edited `,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error al editar el repositorio", error);
    }
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  useEffect(() => {
    fetchDataRepositories();
  }, []);

  return (
    <div className="container-crud">
      <NavigationBar />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h1">MANAGEMENT</Typography>
      </Box>
      <TableCrud
        list={users}
        type="user"
        title="Users"
        titleOne="name"
        titleTwo="bio"
        titleThree="email"
        titleFour="location"
        titleFive="followers"
        handleEdit={handleEditUser}
        handleDelete={handleDeleteUser}
      />

      <TableCrud
        list={repositories}
        type="repository"
        title="Repositories"
        titleOne="name"
        titleTwo="description"
        titleThree="createdDate"
        titleFour="watchers"
        titleFive="forks"
        handleEdit={handleEditRepo}
        handleDelete={handleDeleteRepo}
      />

      <h5 className="carousel-text">Created With:</h5>
      <div className="container-carousel">
        <div className="logos">
          <div className="logos-slide">
            <img src="./src/assets/images/nodejs.svg" alt="NodeJs logo" />
            <img src="./src/assets/images/express.svg" alt="Express logo" />
            <img src="./src/assets/images/mongodb.svg" alt="MongoDB logo" />
          </div>

          <div className="logos-slide">
            <img src="./src/assets/images/nodejs.svg" alt="NodeJs logo" />
            <img src="./src/assets/images/express.svg" alt="Express logo" />
            <img src="./src/assets/images/mongodb.svg" alt="MongoDB logo" />
          </div>
          <div className="logos-slide">
            <img src="./src/assets/images/nodejs.svg" alt="NodeJs logo" />
            <img src="./src/assets/images/express.svg" alt="Express logo" />
            <img src="./src/assets/images/mongodb.svg" alt="MongoDB logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
