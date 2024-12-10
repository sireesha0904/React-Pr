import React, {useState, useEffect} from "react";
function DataFetcher() {
    const [data, Setdata] = useState(null);
    const [isLoading, SetLoading] = useState(true);

    useEffect(
    () => {
     // Arrow function
        setTimeout(() => {
        Setdata("Here is your data!");
        SetLoading(false);
     }, 2000); // Simulating a delay of 2 seconds
    },
   [] // Empty dependency array
    );

    
    return (
        <div>
            {isLoading ? <p>Data is Loading.....</p> : <p>{data}</p>}
        </div>
    );
}
export default DataFetcher;