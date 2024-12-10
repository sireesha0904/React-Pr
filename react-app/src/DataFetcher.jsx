import React, {useState, useEffect} from "react";
function DataFetcher() {
    const [data, Setdata] = useState(null);
    const [isLoading, SetLoading] = useEffect(true);

    useEffect(
        () => { // Arrow functions

        }
    );
    return (
        <div>
            {isLoading ? <p>Data is Loading.....</p> : <p>{data}</p>}
        </div>
    );
}
export default DataFetcher;