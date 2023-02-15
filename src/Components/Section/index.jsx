import React from "react";

const SectionOne = ({sectionNumber}) => {
    return(
        <div className="w-screen h-screen bg-transparent flex justify-center items-center">
            <h1 className="text-white text-6xl font-bold">Section {sectionNumber}</h1>
        </div>
    )
}

export default SectionOne;