import { useEffect } from "react";
import useCommitsData from "../hooks/useCommitsData";
import { Timeline } from "flowbite-react";

const Commits = () => {
  const [commitsData, handleData] = useCommitsData([]);
  const repositoryName = "/github-commits-test";
  
  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <div className="flex  flex-col justify-center items-center m-10 ">
      <h1 className="text-3xl pb-2">{repositoryName}</h1>
      <h2 className="text-xl">Commits</h2>
      <div className="w-[90%] md:w-[50%] ">
        <Timeline>
          {commitsData.map((commit) => {
            let date = new Date(commit.commit.committer.date);
            date = date.toUTCString();
            return (
              <>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content className="flex flex-col items-start w-auto mt-4">
                      <Timeline.Time className="flex w-auto mb-2 pt-1 pl-2 ">
                        {date}
                      </Timeline.Time>
                      
                    </Timeline.Content>
                  </Timeline.Item>
              </>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default Commits;
