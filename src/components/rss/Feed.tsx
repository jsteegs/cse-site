import React from "react";
import FeedItem from "./FeedItem";
import type { RssItem } from "./types";

interface FeedProps {
  items: RssItem[];
}

const Feed = (props: FeedProps) => {
  const items = props.items.slice(-4).reverse();

  return (
    <div className="basis-8/12">
      {items.map((item) => {
        return <FeedItem key={item.guid} item={item} />;
      })}
    </div>
  );
};

export default Feed;
