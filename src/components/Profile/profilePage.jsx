import css from "./profilePage.module.css";
import ProfileInfo from "./profileInfo";
import TrendingBookQueue from "../homepage/trendingBookQueue";
import Generated from "./generatedResponses";

function ProfilePage() {
  return (
    <>
      <div className={`${css.profilePage}`}>
        <ProfileInfo></ProfileInfo>
        <hr />
        <h2>Favourites</h2>
        <TrendingBookQueue></TrendingBookQueue>
        <hr />
        <h2>Generated</h2>
        <Generated></Generated>
      </div>
    </>
  );
}

export default ProfilePage;
