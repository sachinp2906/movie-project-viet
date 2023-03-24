import { useState , useEffect} from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

// here we are using curly braces to import fetchDataFromApi because when we are exporting that function it is named export.
import {fetchDataFromApi} from './utils/api'

import { useSelector , useDispatch } from 'react-redux'
import { getApiCofiguration } from './store/homeSlice'

////////////all components import////////////////
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
/////////////////////////////////////////////////


//////////// all pages imports//////////////////
import Home from "./pages/home/Home"
import Details from "./pages/details/Details"
import SearchResult from "./pages/searchResult/SearchResult"
import Explore from "./pages/explore/Explore"
import PageNotFound from "./pages/404/PageNotFound"
////////////////////////////////////////////////////

// to store the value in store we have to call action using useDispatch
// and the action for now is getApiConfiguration

/*
useSelctor is used to take the data stored by the useDispatch and then we can show that data on the userInterface as per the requirement.
*/

function App() {
const dispatch = useDispatch()

// data from url ===> homeSlice (using useDispatch) ===> store(reduce (inside home:homeSlice))
// now by using useSelctor we can access all the data which is stored in home
const {url} = useSelector((state)=>
  state.home
)

useEffect(()=>{
  apiTesting()
},[])

  const apiTesting = ()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
      // calling the action here using dispatch and storing the response value in store
      dispatch(getApiCofiguration(res))
    })
  }


  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>} />
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
