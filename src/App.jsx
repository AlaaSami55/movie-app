import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Video from "./Components/Video/Video";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {

  // Destructuring
  const [movies, setmovies] = useState([])
  const [Tv, setTv] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=1907dd7e22213c1275b820c5455946aa')
      .then((response) => {
        setmovies(response.data.results);
      })
    axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=1907dd7e22213c1275b820c5455946aa').then((response) => {
      setTv(response.data.results)
    })
  }, [])

  // Routes
  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        {
          index: true, element: <Video data={{
            haveMovie: true,
            haveTv: true,
            allmovies: movies,
            alltv: Tv
          }} />
        },
        {
          path: "movie", element: <Video data={{
            haveMovie: true,
            haveTv: false,
            allmovies: movies,
          }} />
        },
        {
          path: "tv", element: <Video data={{
            haveMovie: false,
            haveTv: true,
            alltv: Tv,
          }} />
        },]
    },

  ])



  return <RouterProvider router={routes} />

}
