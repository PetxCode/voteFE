import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminConfirm from "./components/Auth/AdminConfirm";
import CreateOrganisation from "./components/Auth/CreateOrganisation";
import EmailConfirmationPage from "./components/Auth/EmailConfiramtionPage";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ForgetRed from "./components/Auth/RedirectForget";
import RegistrationPage from "./components/Auth/RegistrationPage";
import ResetPassword from "./components/Auth/ResetPassword";
import SecondConfirmation from "./components/Auth/SecondConfirmation";
import SigninPage from "./components/Auth/SignIn";
import PrivateRoute from "./components/Global/PrivateRoute";
import MainPage from "./components/Main/MainPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/forgot" element={<ForgetPassword />} />
        <Route path="/api/user/:id/:token/reset" element={<ResetPassword />} />

        <Route path="/redirectForget" element={<ForgetRed />} />

        <Route path="/createOrganisation" element={<CreateOrganisation />} />

        <Route path="/confirm" element={<EmailConfirmationPage />} />
        <Route path="/api/user/:id/token" element={<SecondConfirmation />} />
        <Route path="/api/user/:id/verify" element={<AdminConfirm />} />

        {/* <Route path="/secondConfirmation" element={<AdminConfirm />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
