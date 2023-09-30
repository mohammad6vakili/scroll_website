import { Fragment, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import TypeIn from "./Components/TypeIn";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./Components/ContactPage";

function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <Header visible={!isHeaderHidden} hideFirst={true} />
            <Home onToggleVisibility={setIsHeaderHidden} />
            <TypeIn />
            <Features />
            <Login />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Fragment>
            <Header visible={true} />
            <ContactPage />
            <Footer />
          </Fragment>
        }
      />
    </Routes>
  );
}

export default App;
