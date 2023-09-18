import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
const UserList = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (Data) {
      setUserData(Data.data);
    }
    console.log(userData);
  };

  return (
    <div>
      <UserCard val={userData} />
    </div>
  );
};

export default UserList;
