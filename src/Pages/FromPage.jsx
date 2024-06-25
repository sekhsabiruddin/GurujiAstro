import React from "react";
import LoginSecond from "../components/LoginSecond/LoginSecond";
import Login from "../components/Login/Login";
import { useSelector } from "react-redux";
import FormSummary from "../components/FormSummary/FormSummary";

const FromPage = () => {
  const tracker = useSelector((state) => state.data.tracker);
  console.log("tracker", tracker);

  return (
    <div>
      {tracker === 1 && <Login />}
      {tracker === 2 && <LoginSecond />}
      {tracker === 3 && <FormSummary />}
    </div>
  );
};

export default FromPage;
