
import css from "./homepage.module.css";
import { useState } from "react";
import Carousels from "./carousals";
import TrendingBookQueue from "./trendingBookQueue";
import AllBooks from "./allBooks";
import { useUserContext } from "../../store/context";
import { useEffect } from "react";

function Homepage() {

  let {getUser,updateUserState}=useUserContext();

  useEffect(()=>{
    getUser();
  },[]);

  return (
    <>
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
    </>
  );
}

export default Homepage;
