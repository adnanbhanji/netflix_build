const API_KEY = "7d99649807c92a5e764013dff7154804";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}`,
  fetchNowPlayingTV: `/tv/now_playing?api_key=${API_KEY}`,
};

export default requests;
