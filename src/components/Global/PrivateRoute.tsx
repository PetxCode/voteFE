import React, { PropsWithChildren } from "react";
import { users } from "./GlobalState";
import { useRecoilValue } from "recoil";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../Main/MainPage";
import jwt_decode from "jwt-decode";
import Header from "../Header";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useRecoilValue(users);
  // let token = user?.getToken;
  // let decoded = jwt_decode(token);

  //   if (decoded?.superAdmin!) {
  //   }

  return user ? (
    <div>
      <MainPage />
    </div>
  ) : (
    <div>
      <LandingPage />
    </div>
  );
};

export default PrivateRoute;
