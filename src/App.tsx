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
import AuthComponent from "./components/AuthComponent";
import Footer from "./components/Components/Footer/Footer";
import PrivateRoute from "./components/Global/PrivateRoute";
import Header from "./components/Header";
import MainPage from "./components/Main/MainPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthComponent />
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
