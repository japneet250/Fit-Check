import React from "react";
import NavBar from "../components/NavBar";
import HomeBody from "../components/HomeBody";


const profile = ({data, sendData}) => {

    return (
        <>
          <NavBar />
          <div className="main">
            <div class="imgAndProfile">
              <div className="imgRing">
                <img class="img"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Profile"
                />
              </div>

                  <div class = "your-profile">
                    <h1 class = "text-prof">
                      YOUR PROFILE!
                    </h1>
              </div>
              </div>
            <div class = 'Info'>
                <div class = "Text-box">
                    
                    <h1 className="text1">
                    Your Data
                    </h1>
                    <p class = "info-data">
                        Name: John Doe<br/>
                        Email : john@doe.com
                    </p>
                    
                </div>

              <div class = "Text-box2">
                <h1 className="text2">
                  Competitions Partcipated!
                </h1>
                <p class = "info-data">
                        1. Challenge 1 : Push Ups Completed<br/>
                        2. Challenge 2 : Pull Ups Completed<br/>
                        3. Challenge 3 : Arms Beginers completed<br/>
                        4. Challenge 4 : Chest Done<br/>
                        5. Challenge 5 : Legs Done
                    </p>
              </div>

              </div>


              <div class="Text-box3">
                <p className = "xp">
                <b> YOU'VE GOT 1,200 XP! </b> </p>
              </div>
            </div>
          <div class = "data-info">
            {/* <ul>
                <li> Name: Full Name</li>
                <li> Email: Email id </li>
                <li> Ongoing Task </li>
            </ul> */}
          </div>
          <div class = "Competition Participated" >
            {/* <ul>

            </ul> */}
          </div>
          <div class="animated-element"></div>
        </>
      );
    }
export default profile;




















// import React from "react";
// import NavBar from "../components/NavBar";
// import HomeBody from "../components/HomeBody";


// const profile = ({data, sendData}) => {

//     return (
//         <>
//           <NavBar />
//           <div className="main">
//             <div className="avatar pt-10 pl-10 pb-2 border-2 border-red-500 ml-20 w-3/4 h-40">
//               <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                 <img
//                   src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//                   alt="Profile"
//                 />
//               </div>
//               <div className="flex flex-col mx-auto mt-5 lg:flex-row w-full">
//                 <div className="w-full lg:w-1/2 lg:mr-2 mb-2 lg:mb-0">
//                   <div className="h-30 lg:h-auto lg:w-3/4 border-2 border-red-500">
//                     <h1 className="text-3xl lg:text-4xl font-bold hover:underline hover:cursor-pointer">
//                       <b>Your profile</b>
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
    
//             <div class = "Text1" className="flex flex-wrap bg-base-100 w-full mt-5 border-2 border-red-500 mx-auto">
//               <div className="flex flex-col bg-base-100 w-full sm:w-1/2 h-72 border-2 border-red-500 mb-5 sm:mb-0">
//                 <h1 className="mb-0 hover:underline hover:cursor-pointer">
//                   Your data
//                 </h1>
//               </div>
//               <div className="flex flex-col bg-base-100 w-full sm:w-1/2 h-72 border-2 border-red-500">
//                 <div className="pb-0">
//                   <h1 className="mb-4 sm:mb-0 hover:underline hover:cursor-pointer">
//                     Competitions participated
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       );
//     }
// export default profile;