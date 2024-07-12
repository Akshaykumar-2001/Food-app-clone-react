import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>oops!!</h1>
      <h2>somthng went wrong !!</h2>
      {console.log(err)}
      <h1>{err.data}</h1>
    </div>
  );
};

export default Error;
