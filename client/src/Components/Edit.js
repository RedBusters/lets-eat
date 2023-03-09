import React, { useState } from "react";
import {ACCESS_LEVEL_ADMIN} from "../config/global_constants"

const Article = ({ article, ACCESS_LEVEL_ADMIN }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [thumbnailURL, setthumbnailURL] = useState(article.thumbnailURL);
  const [content, setContent] = useState(article.content);
  const [mediaType, setmediaType] = useState(article.mediaType);
  const [mediaUrl, setmediaUrl] = useState(article.mediaUrl);
  const [leadstory, setleadstory] = useState(article.leadstory);


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  
  const handleThumbnailChange = (event) => {
    setthumbnailURL(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleMediaTypeChange = (event) => {
    setmediaType(event.target.value);
  };
  
  const handleMediaUrlChange = (event) => {
    setmediaUrl(event.target.value);
  };
  
  const handleLeadstoryChange = (event) => {
    setleadstory(event.target.value);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = () => {
    // Call your API to save the changes
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input type="text" value={article.title} onChange={handleTitleChange} />
<img src={article.thumbnailURL} onChange={handleThumbnailChange}  />
<textarea value={article.content} onChange={handleContentChange} />
<textarea value={article.mediaType} onChange={handleMediaTypeChange} />
<audio controls>
    <source src={article.mediaUrl} type="audio/mpeg" onChange={handleMediaUrlChange}/>
</audio>
   <select onChange={handleLeadstoryChange}>
    <option>
        Yes
    </option>
    <option>
        No
    </option>

   </select>

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h1>{article.title}</h1>
          <p>{article.thumbNail}</p>
          <p>{article.content}</p>
          <p>{article.mediaType}</p>
          <p>{article.mediaUrl}</p>
          <p>{article.leadstory}</p>
          {ACCESS_LEVEL_ADMIN && <button onClick={handleEdit}>Edit</button>}
        </div>
      )}
    </div>
  );
};

export default Article;