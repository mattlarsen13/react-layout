import {useState, useEffect } from "react";
import axios from "axios";
import HousePlan from "./HousePlan";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    //wait until after page is rendered to do the asyncronous loading
    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
            setHouses(response.data);
        })();
    },[]);

    return (
       <div className="house-plans">
        <h3>House Plans</h3>
        {houses.map((housePlan)=>(
            <HousePlan
                name={housePlan.name} 
                size={housePlan.size}
                bedrooms={housePlan.bedrooms}
                bathrooms={housePlan.bathrooms} /> 
        ))}
       </div>
    );
};

export default HousePlans;