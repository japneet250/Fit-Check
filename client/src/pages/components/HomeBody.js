import React from "react";

export default function HomeBody () {
    return (
        <>
            <div className="h-full mx-auto flex flex-col items-center justify-center p-10 gap-10">
                <div className="flex flex-col gap-4">
                    <div className="challenge-container">
                        <input type="radio" name="my-accordion-1" checked="checked" style={{color:"white"}}/>
                        <div className="p-10 flex flex-col gap-10 collapse-title">
                            <h1 className="title">What is Pneumonia?</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="content">
                                Pneumonia, an infection of the lungs caused by bacteria, viruses, or fungi, is <span className="font-semibold">one of the leading causes of hospitalizations and deaths annually.</span> Pneumonia causes pleural effusion, in which the air sacs in the lungs, called alveoli, become filled with fluid or pus.
                            </p>
                        </div>
                    </div>

                    <div className="challenge-container">
                        <input type="radio" name="my-accordion-2" checked="checked" className="text-white"/>
                        <div className="p-10 flex flex-col gap-10 collapse-title">
                            <h1 className="title">Symptoms of Pneumonia</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="content">
                                This can result in many symptoms such as: rapid or difficulty breathing, shortness of breath, cough with green, yellow, or bloody mucus, fever, bluish colour to lips and fingernails, extreme fatigue, rapid pulse, chills, heavy sweating, confused mental state or delirium, and sharp or stabbing chest pain that is worse with breathing or coughing.
                            </p>
                        </div>
                    </div>

                    <div className="challenge-container">
                        <input type="radio" name="my-accordion-3" checked="checked" className="text-white"/>
                        <div className="p-10 flex flex-col gap-10 collapse-title">
                            <h1 className="title">Chest X-Ray Usage</h1>
                        </div>
                        <div className="collapse-content">
                            <p className="content">
                                Due to its severity, early diagnosis can greatly improve prognosis and survival rates in patients. <span className="font-semibold">Chest x-rays are very commonly used</span> for providing a diagnosis alongside a medical history and a physical exam.
                                <br></br><br></br>
                                Even though CT scans are much more precise, they are not routinely used due to higher cost and time usage, along with greater exposure to radiation. Therefore, chest x-rays are currently the <span className="font-semibold">standard radiographic test</span> for pneumonia evaluation. 
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}