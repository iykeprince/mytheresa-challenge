import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/api";
import Button from "../components/Button";
import MovieBanner from "../components/MovieBanner";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MovieDetail from "../components/MovieDetail";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getMovieDetail(id);
    console.log("data", data);
    setData(data);
  };

  return (
    <DefaultLayout>
      <div
        className="myt-detail__container"
        style={{
          margin: "1rem",
        }}
      >
        <MovieDetail>
          <MovieBanner data={data} />
          <Sidebar data={data} />
        </MovieDetail>

        <Footer data={data} />
      </div>
    </DefaultLayout>
  );
};

export default DetailPage;
