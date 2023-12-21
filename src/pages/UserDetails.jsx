import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import CardList from "../components/CardList";
import axios from "axios";
import { Box } from "@mui/material";


const UserDetails = () => {
  const { id } = useParams();
  const {login} =useParams();
  const [data, setData] = useState([]);
  const [specificData,setSpecificData]= useState([]);
 

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/users/${login}`,
        {
          headers: {
            Authorization: `5ce7a0bd8ce46057b31d`,
          },
        }
      );
      setData(response.data.items);
    } catch (error) {
      console.error(error);
    }
    
  };

  useEffect(() => {
   fetchData()
  }, [id, login]);

  useEffect(()=>{
    const result = data.filter((item)=> item.id ==id)
    setSpecificData(result)
  },[data])

  if (!data) {
    return <Box component='div' sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'100px'}}>NO RESULTS❌</Box>;
  }
 

  return (
    <>
      <CardList type="specificUser" list={specificData} />
    </>
  );
};

export default UserDetails;
