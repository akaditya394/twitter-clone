import React, { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function TweetBox() {
  const [input, setInput] = useState<string>("");
  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-5">
      <img
        className=" mt-4 h-14 w-14 rounded-full object-cover"
        src={session?.user?.image || "https://links.papareact.com/gll"}
        alt="profile-pic"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="outline-none h-24 w-full text-xl placeholder:text-xl"
            type="text"
            placeholder="what's happening?"
          />
          <div className="flex flex-1 items-center pl-2">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon
                className="h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon
                className="h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150"
              />
              <EmojiHappyIcon
                className="h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150"
              />
              <CalendarIcon
                className="h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150"
              />
              <LocationMarkerIcon
                className="h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150"
              />
            </div>
            <button
              disabled={!input || !session}
              className="rounded-full bg-twitter px-5 py-2 
            font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
