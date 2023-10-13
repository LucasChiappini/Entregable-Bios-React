import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
import axios from "axios";

const RepositoryDetails = () => {
  const { id } = useParams();
  const {name} =useParams();
  const { language } = useParams();
  const {date} =useParams();
  const [data, setData] = useState([]);
  const [specificData,setSpecificData]= useState([]);

  const fetchData = async () => {
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let day = ("0" + newDate.getDate()).slice(-2)
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2)
    let convertedDate = `${year}-${month}-${day}`;
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${name}+language:${language}+created:>=${convertedDate}`,
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
  }, [id, name]);

  useEffect(()=>{
    const result = data.filter((item)=> item.id ==id)
    setSpecificData(result)
  },[data])

  if (!data) {
    return <div>NO RESULTS</div>;
  }

  return (
    <>
      <CardList type="specificRepository" list={specificData} />
    </>
  );
};

export default RepositoryDetails;