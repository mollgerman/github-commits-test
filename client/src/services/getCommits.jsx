import { API_URL } from "../constants";

export const getCommits = async () => {
  try{
    const response = await fetch(API_URL,
    {
      mode:"cors"
    });
    const jsondata = await response.json();
    return jsondata;
}catch(error){
    console.log("Error Fetching data ",error);
}
}