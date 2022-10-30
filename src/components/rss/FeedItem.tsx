import React from "react";
import type { RssItem } from "./types";
import {
  ArrowDownRightIcon,
  CalendarIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid/esm/index.js";
import { format } from "date-fns";

const FeedItem = ({ item }: { item: RssItem }) => {
  return (
    <div className="bg-stone-50 rounded  mb-6 py-5 px-10 text-slate-700 text-md font-montserrat font-light">
      <div className="mb-3 flex">
        <div className="mr-5 ">
          <div className="border-2 border-slate-700 rounded-full p-3">
            <ArrowDownRightIcon
              className="fill-slate-700 h-7 w-7"
              fill="black"
              height={5}
              width={5}
            />
          </div>
        </div>
        <div className=" line-clamp-2 h-fit">{item.title}</div>
      </div>
      <span>
        <span className="mr-5">
          <UserIcon className="h-5 w-5 inline mr-2" />
          {item.author}
        </span>
        <span>
          <CalendarIcon className="h-5 w-5 inline mr-2" />
          {format(new Date(item.pubDate), "MM/dd/yyyy")}
        </span>
      </span>
    </div>
  );
};

export default FeedItem;
