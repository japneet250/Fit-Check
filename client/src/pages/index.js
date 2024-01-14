import React, {useState} from "react"
import NavBar from "./components/NavBar"
import HomeBody from "./components/HomeBody"

export default function Home() {
  const [data, sendData] = useState(null);
  return (
    <div className="h-fit">
      <NavBar data={data} sendData={sendData}/>
      <HomeBody />
    </div>
  )
}
