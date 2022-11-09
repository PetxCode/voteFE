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
import MainPrivateRoute from "./components/Global/MainPrivateRoute";
import PrivateRoute from "./components/Global/PrivateRoute";
import Header from "./components/Header";
import AddCandidates from "./components/Main/AddCandidates";
import MainPage from "./components/Main/MainPage";
import ViewOrganisation from "./components/Main/ViewOrganisation";
import Poll from "./components/PollData/Poll/Poll";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthComponent />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<PrivateRoute />} />

          {/* <MainPrivateRoute>
          <Route path="/viewOrganisation" element={<ViewOrganisation />} />
        </MainPrivateRoute> */}

          <Route
            path="/viewOrganisation"
            element={
              <MainPrivateRoute>
                <ViewOrganisation />
              </MainPrivateRoute>
            }
          />

          <Route
            path="/createOrganisation"
            element={
              <MainPrivateRoute>
                <CreateOrganisation />
              </MainPrivateRoute>
            }
          />

          <Route
            path="/addCandidate"
            element={
              <MainPrivateRoute>
                <AddCandidates />
              </MainPrivateRoute>
            }
          />
          <Route
            path="/votePoll"
            element={
              <MainPrivateRoute>
                <Poll />
              </MainPrivateRoute>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
