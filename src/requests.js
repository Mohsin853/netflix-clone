const API_KEY = "25f5ae08965d38ba60bdea9bb2763c9f";

const requests = {
    fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
}