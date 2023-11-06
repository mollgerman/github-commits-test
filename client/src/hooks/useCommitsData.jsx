import { useState } from "react";
import { getCommits } from "../services";

const useCommitsData = () => {
  const [commitsData, setCommitsData] = useState([])

  const handleData = async () => {
    const data = await getCommits()
    setCommitsData(data.commitsArray)
  }

  return [commitsData, handleData]
};

export default useCommitsData;
