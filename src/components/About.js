import userContext from "../utils/userContext";
import { useContext } from "react";

const About = () => {
  const { userName } = useContext(userContext);
  return (
    <div>
      <h1>{userName}</h1>
      <h1>About us page !</h1>
    </div>
  );
};

export default About;
