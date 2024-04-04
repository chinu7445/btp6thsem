import css from "./trendingBookQueue.module.css";
import TrendingBook from "./trendingBook";
import { useState } from "react";

function TrendingBookQueue() {
  let [bookArr,setBookArr] =useState( [
    "Screenshot (1).png",
    "Screenshot (2).png",
    "Screenshot (3).png",
    "Screenshot (4).png",
    "Screenshot (5).png",
    "Screenshot (6).png",
  ]);
  function slideLeft(){
    let copyArr=[...bookArr];
    let firstEle=copyArr.shift();
    copyArr.push(firstEle);
   setBookArr(copyArr)
    // console.log(bookArr);
  }
  function slideRight() {
    let copyArr = [...bookArr];
    let firstEle = copyArr.pop();
    copyArr.unshift(firstEle);
    setBookArr(copyArr)
    // console.log(bookArr);
   }

  return (
    <>
      <div className={`${css.trendingBookQueueDiv}`}>
        <div className={`${css.arrowDiv}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
            style={{ cursor: "pointer" }}
            onClick={slideLeft}
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </div>
        <div className={`${css.trendingBookQueue}`}>
          {
            bookArr.slice(0,4).map((element,index)=><TrendingBook imgSrc={element}></TrendingBook>)
          }
        </div>
        <div className={`${css.arrowDiv}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={`bi bi-arrow-right-circle`}
            viewBox="0 0 16 16"
            style={{ cursor: "pointer" }}
            onClick={slideRight}
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
export default TrendingBookQueue;
