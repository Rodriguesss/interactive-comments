import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import UserContext from "../utils/context/UserContext"

import { Icon } from "../utils/images/import_images"
import Favicon from "react-favicon"

import { ResetStyle } from "../css/reset"
import { Style } from "../css/style"

import Main from "../components/generics/Containers/Main"
import Comments from "./pages/Comments"

import { Data } from "../data/data"

export default function App() {
  const [data] = useState(Data)

  return (
    <>
      <ResetStyle />
      <Style />
      <Favicon url={Icon["FavIconImage"]} />

      <Main>
        <BrowserRouter>
          <UserContext.Provider value={{data}}>
            <Routes>
              <Route path="/" element={<Comments />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </Main>
    </>
  )
}