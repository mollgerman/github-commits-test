import { useEffect } from "react";
import useCommitsData from "../hooks/useCommitsData";
import { Timeline } from "flowbite-react";
import { getTimeAgo } from "../scripts/getTimeAgo";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { motion } from "framer-motion";

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
            const copyToClipboard = () => {
              navigator.clipboard.writeText(commit.sha);
            };
            return (
              <>
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  translation={{ duration: 0.5, delay: 0.25 }}
                >
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content className="flex flex-col items-start w-auto mt-4">
                      <Timeline.Time className="flex w-auto mb-2 pt-1 pl-2 ">
                        {date}
                      </Timeline.Time>
                      <div className="flex flex-col w-[95%] items-start  border border-gray-500 hover:border-gray-400 rounded-xl">
                        <div className="w-full flex gap-2 items-center bg-[#2a2a2a] border-b border-gray-600 pt-[0.3rem] px-[0.3rem] pb-1 rounded-t-xl">
                          <img
                            src={commit.committer.avatar_url}
                            className="h-5 w-5 rounded-full"
                          />
                          <a
                            href={commit.committer.html_url}
                            target="_blanck"
                            className="text-[1rem] self-end hover:underline"
                          >
                            {commit.committer.login}
                          </a>
                          <p className="text-[0.8rem] pt-[0.09rem]  text-gray-400/50 ml-3">
                            Commited {getTimeAgo(date)}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row  w-full justify-between items-center">
                          <Timeline.Title className="p-2">
                            {commit.commit.message}
                          </Timeline.Title>
                          <div className=" flex  sm:mr-5">
                            <div className=" p-2 border border-gray-500 hover:border hover:border-gray-300 rounded-l-lg hover:cursor-pointer ">
                              <a title="Copy full SHA" className="h-full">
                                <HiOutlineClipboardCopy
                                  className="h-full"
                                  onClick={copyToClipboard}
                                />
                              </a>
                            </div>
                            <a
                              title={commit.sha}
                              className=" border border-gray-500 hover:border p-1 px-2 rounded-r-lg "
                            >
                              {commit.sha.slice(0, 5) +
                                " ... " +
                                commit.sha.slice(-3)}
                            </a>
                          </div>
                        </div>

                        <Timeline.Body className="px-3 self-center sm:self-start pt-2 sm:pt-0">
                          <a
                            href={commit.html_url}
                            target="_blanck"
                            className="hover:underline"
                          >
                            View commit details
                          </a>
                        </Timeline.Body>
                      </div>
                    </Timeline.Content>
                  </Timeline.Item>
                </motion.div>
              </>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default Commits;
