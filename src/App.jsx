
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MyNavbar from "./components/homepage/navbar";
import Sidebar from "./components/homepage/sidebar";
import LoginContainer from "./components/signin/loginContainer";
import Homepage from "./components/homepage/homepage";
import Book from "./components/book/book";
import { useState } from "react";
// import { UserProvider } from "./store/context";
import ProfilePage from "./components/Profile/profilePage";
import PDFViewer from "./pdfViewer";

function App() {

  let [sidebarToggle, setSidebarToggle] = useState(true);
  function handleSidebarToggle() {
    setSidebarToggle(!sidebarToggle);
  }
   const pdfBase64 = 'JVBERi0xLjQKJcOtw6zCpiIKJSBDcmVhdGVkIGJ5IGNhbGlicmUgMy4yNi4xIFtodHRwczovL2NhbGlicmUtZWJvb2suY29tXQoK';
  return (
    <>
      {/* <UserProvider> */}
        {/* <Router>
          <Routes>
            <Route path="/login" element={<LoginContainer />} />
            <Route
              path="/"
              element={
                <>
                  <MyNavbar
                    handleSidebarToggle={handleSidebarToggle}
                  ></MyNavbar>
                  <div className={`slidebarAndOtherFlex`}>
                    {sidebarToggle && <Sidebar></Sidebar>}
                    <Homepage />{" "}
                  </div>
                </>
              }
            />
            <Route
              path="/book"
              element={
                <>
                  <MyNavbar
                    handleSidebarToggle={handleSidebarToggle}
                  ></MyNavbar>
                  <div className={`slidebarAndOtherFlex`}>
                    {sidebarToggle && <Sidebar></Sidebar>}
                    <Book />{" "}
                  </div>
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <MyNavbar
                    handleSidebarToggle={handleSidebarToggle}
                  ></MyNavbar>
                  <div className={`slidebarAndOtherFlex`}>
                    {sidebarToggle && <Sidebar></Sidebar>}
                    <ProfilePage />{" "}
                  </div>
                </>
              }
            />
          </Routes>
        </Router> */}
        <PDFViewer pdfBase64={pdfBase64}></PDFViewer>
      {/* </UserProvider> */}
    </>
  );
}

export default App;