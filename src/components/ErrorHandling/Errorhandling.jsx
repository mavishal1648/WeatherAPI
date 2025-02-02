import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const ErrorHandling = () => {
  const { error } = useContext(AppContext);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return null;
};

export default ErrorHandling;