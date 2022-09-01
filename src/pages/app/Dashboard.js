import React from "react";
import Card from "../../components/ui/Card";
import Logo from "../../assets/logo.png";
import { Button } from "../../components/form";
import { logoutActionCreators } from "../../store";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(logoutActionCreators, dispatch);

  const details = JSON.parse(localStorage.getItem("details"));
  console.log(details);

  return (
    <div className="main">
      <div className="p-10">
        <img alt="airgate" src={Logo} />
      </div>

      <div className="p-10 w-full h-full flex justify-end mt-[27%]">
        <Card classes=" p-10 w-[25rem] h-[15rem] flex flex-col">
          <h1 className="font-bold">Hi {details.firstname}</h1>
          <p className="mt-2">Thank you for using our service</p>
          <div>
            <Button
              onClick={() => logout()}
              classes="button secondary text-sm"
              type="submit"
            >
              Logout
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
