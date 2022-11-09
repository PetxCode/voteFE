import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminConfirm from "./Auth/AdminConfirm";
import CreateOrganisation from "./Auth/CreateOrganisation";
import EmailConfirmationPage from "./Auth/EmailConfiramtionPage";
import ForgetPassword from "./Auth/ForgetPassword";
import ForgetRed from "./Auth/RedirectForget";
import RegistrationPage from "./Auth/RegistrationPage";
import ResetPassword from "./Auth/ResetPassword";
import SecondConfirmation from "./Auth/SecondConfirmation";
import SigninPage from "./Auth/SignIn";
import ViewOrganisation from "./Main/ViewOrganisation";

const AuthComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/forgot" element={<ForgetPassword />} />
        <Route path="/api/user/:id/:token/reset" element={<ResetPassword />} />

        <Route path="/redirectForget" element={<ForgetRed />} />

        <Route path="/confirm" element={<EmailConfirmationPage />} />
        <Route path="/api/user/:id/token" element={<SecondConfirmation />} />
        <Route path="/api/user/:id/verify" element={<AdminConfirm />} />
      </Routes>
    </div>
  );
};

export default AuthComponent;
