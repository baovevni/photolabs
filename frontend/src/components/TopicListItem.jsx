import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, fetchPhotosByTopic }) => {

  const handleClick = () => {
    fetchPhotosByTopic(topic.id);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleClick} href={`/topics/${topic.slug}`} className="topic-list__item span">
      {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
