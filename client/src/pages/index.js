import React, {useState} from "react"
import NavBar from "./components/NavBar"

export default function Home() {
  const [data, sendData] = useState(null);
  return (
    <div className="h-fit p-5">
      <NavBar data={data} sendData={sendData}/>
    </div>
  )
}
