import React from "react";
import type { RssItem } from "./types";
import {
  ArrowDownRightIcon,
  CalendarIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const FeedItem = ({ item }: { item: RssItem }) => {
  return (
    <div className="bg-stone-50 rounded flex-col mb-6 py-5 px-10 text-slate-700 text-md font-montserrat font-light max-w-2xl max-h-2xl">
      <div className="flex min-w-0">
        <div className="mr-5">
          <div className="border-2 border-slate-700 rounded-full p-3 ">
            <ArrowDownRightIcon
              className="fill-slate-700 h-7 w-7"
              fill="black"
              height={5}
              width={5}
            />
          </div>
        </div>
        <div className="text-ellipsis min-w-0 ">{item.title}</div>
      </div>
      <div className="flex">
        <div className="relative">
          <UserIcon className="h-5 w-5 fill-slate-700 inline" />
          {item.author}
        </div>
        <div className="">
          <CalendarIcon className="h-5 w-5 fill-slate-700 inline" />
          {item.pubDate}
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
