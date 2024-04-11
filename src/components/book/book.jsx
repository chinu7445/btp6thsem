import css from "./book.module.css";
import Button from "react-bootstrap/Button";
import Card from "./flipCard";
function Book() {
    return (
      <>
        <div className={`${css.bookAndCards}`}>
          <div className={`${css.bookDiv}`}>
            <div className={`${css.bookImgDiv}`}>
              <img
                src="Screenshot (1).png"
                alt="book Img"
                className={`${css.bookImg}`}
              />
            </div>
            <div className={`${css.bookInfo}`}>
              <h3>Book Title</h3>
              <p>Writer: </p>
              <p>Rating: </p>
              <p className={`${css.bookDescription}`}>
                A young Cantonese village boy must overcome self-doubt, ridicule
                and classism to realise his dream of competing in the Guangzhou
                Lion Dancing championship. AniWatch is the best site to watch I
                Am What I Am SUB online, or you can even watch I Am What I Am
                DUB in HD quality.
              </p>
              <div className={`${css.buttonDiv}`}>
                <Button className={`${css.readButton}`} variant="primary">
                  Read
                </Button>
                <Button className={`${css.favouritesButton}`} variant="danger">
                  Add to Favourites
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className={`${css.cardRow}`}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </>
    );
}

export default Book;
