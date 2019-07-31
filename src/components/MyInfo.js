import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"

function MyInfo() {
    return (
      <div>
        <h1>Bob Ziroll</h1>
        <p>This is a paragraph about me...</p>
        <ul>
          <Header />
          <Footer />
          <MainContent />
        </ul>
      </div>
    )
}

export default MyInfo;