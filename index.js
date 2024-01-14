import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Profile () {
    return (
        <><NavBar />
        <div className="avatar p-10 border-2 border-red-500 ml-20 rounded w-3/4">
  <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile" />
  </div>
  <div className="mx-auto mr-15 mt-5 h-20  w-1/2 border-2 border-red-500">
    <h1 className="text-4xl font-bold"><b>Your profile</b></h1>
  </div>
</div>
<div className="navbar bg-base-100 w-3/4 h-full mt-5 border-2 border-red-500 ml-20">

<div className="navbar bg-base-100 w-1/2 h-72 border-2 border-red-500 ml-20">
  <h1 className="mb-0"> Your data</h1>
  </div>
  <div className="navbar bg-base-100 w-1/2 h-72 border-2 border-red-500 mr-20">
    <div className="pb-0 ">
    <h1 className="mb-94"> Competitions partcipated</h1> 
    </div>
  </div>

</div>
        </>
    )
}