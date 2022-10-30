import React from "react";
import FeedItem from "./FeedItem";
import type { RssItem } from "./types";

interface FeedProps {
  items: RssItem[];
}

const Feed = (props: FeedProps) => {
  const items = props.items.slice(-4).reverse();

  return (
    <div className="">
      {items.map((item) => {
        return <FeedItem item={item} />;
      })}
    </div>
  );
};

export default Feed;
