import { createContext } from "react";

const userContext = createContext({
  userName: "default",
});

export default userContext;
