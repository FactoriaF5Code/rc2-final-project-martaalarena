import { useState, useEffect } from "react";

export function useReviewService() {
  const url = "http://localhost:8080/api/review";
  const [data, setData] = useState(null);
  const [needsReload, setNeedsReload] = useState(true);

  useEffect(() => {
    if(needsReload){
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        setData(data);
        setNeedsReload(false);
    });
    }
}, [needsReload]);
      
  
  return { data, url, setNeedsReload};
}

export function ReviewService() {
    return useReviewService();
}