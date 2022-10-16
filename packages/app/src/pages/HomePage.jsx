import React from "react";
import Carousel from "../components/Carousel";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import Loading from "../components/Loading";

const HomePage = ({ genres, loading }) => {
  return (
    <DefaultLayout>
      <div className="home__container" style={{ margin: "48px" }}>
        {loading ? (
          <Loading />
        ) : (
          genres.slice(3, 6).map((genre) => {
            const { id, name } = genre;
            return <Carousel key={id} id={id} title={name} />;
          })
        )}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
