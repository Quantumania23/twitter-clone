import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material/core";

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/"/>
            <input placeholder="What's happening?" type='text'/>
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'/>

        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
