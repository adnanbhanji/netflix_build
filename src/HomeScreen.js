import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";

const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLarge />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
    </div>
  );
};

export default HomeScreen;
