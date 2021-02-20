import React, { useEffect } from "react";

const AddingPlants = () => {
    useEffect(() => {
        document.title = "애완식물 추가";
    },[])
    return(
        <div>여기는 AddingPlants입니다.</div>
    )
}
export default AddingPlants;