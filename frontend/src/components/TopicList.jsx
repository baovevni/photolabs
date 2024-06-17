import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  if (!Array.isArray(topics)) {
    return <div>No topics available.</div>;
  }
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} fetchPhotosByTopic={fetchPhotosByTopic}/>
      ))}
    </div>
  );
};

export default TopicList;