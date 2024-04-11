import Button from "react-bootstrap/Button";
import css from "./trendingBook.module.css";
import { Link } from "react-router-dom";

function TrendingBook({imgSrc}) {
  return (
    <>
      <Link to={`/book`} className={css.bookLink}>
        <div className={`${css.trendingBook}`}>
          <img className={`${css.trendingBookBookImg}`} src={imgSrc} alt="" />
          <div className={`${css.trendingBookBody}`}>
            <h4 className={`${css.bookName}`}>Book Name</h4>
            <p className={`${css.bookDescription}`}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button variant="primary">Go somewhere</Button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TrendingBook;
