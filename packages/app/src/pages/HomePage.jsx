import React from "react";
import Carousel from "../components/Carousel";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const HomePage = ({ genres }) => {
  return (
    <DefaultLayout>
      <div className="home__container" style={{ margin: "48px" }}>
        {genres.slice(3, 6).map((genre) => {
          const { id, name } = genre;
          return <Carousel key={id} id={id} title={name} />;
        })}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
