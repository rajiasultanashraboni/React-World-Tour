import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      {visited ? "I have visited" : "I want to visiit"}
    </div>
  );
};

export default Country;
