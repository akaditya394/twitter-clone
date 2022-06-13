import { RefreshIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Tweet } from "../typings";
import TweetComponent from "../components/Tweet";
import TweetBox from "./TweetBox";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets: tweetProps }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetProps);
  const handleRefresh = async () => {
    const tweets = await fetchTweets();
    setTweets(tweets);
  };
  return (
    <div className="lg:col-span-5 col-span-7 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="h-8 w-8 mr-5 mt-5 cursor-pointer  
          text-twitter transition-all duration-500 ease-out hover:rotate-180 
          active:scale-125"
        />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
