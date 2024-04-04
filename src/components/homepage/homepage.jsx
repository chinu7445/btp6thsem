import MyNavbar from "./navbar";
import Sidebar from "./sidebar";
import css from "./homepage.module.css";
import { useState } from "react";
import Carousels from "./carousals";
import TrendingBookQueue from "./trendingBookQueue";
import AllBooks from "./allBooks";

function Homepage() {
  let [sidebarToggle, setSidebarToggle] = useState(true);
  function handleSidebarToggle() {
    setSidebarToggle(!sidebarToggle);
  }

  return (
    <>
      <MyNavbar handleSidebarToggle={handleSidebarToggle}></MyNavbar>
      <div className={`${css.slidebarAndOtherFlex}`}>
        {sidebarToggle && <Sidebar></Sidebar>}
        <div className={`${css.CentralItems}`}>
          <Carousels></Carousels>
          <h3 style={{ marginLeft: "7%", marginTop: "3%" }}>Trending</h3>
          <TrendingBookQueue></TrendingBookQueue>
          <h3 style={{ marginLeft: "7%", marginTop: "3%" }}>All Books</h3>
          <AllBooks></AllBooks>
          <footer>
            <div>
              <h4>Contact us:</h4>
              <p>name: number</p>
              <p>name: number</p>
              <p>name: number</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Homepage;
