import React, { Component } from "react";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";
import Comment from "./comment";

export default class Post extends Component {
  render() {
    // declaring a variable an object,
    let commentOne = {
      // using key:value pairs
      content: "This is my post c1",
      username: "Johnny",
      date: "12-12-2018",
    };
    let commentTwo = {
      content: "this is another post c2",
      username: "Qui-gon Jin",
      date: "03-12-2018",
    };

    return (
      <div className="card w-75">
        <div className="card-header bg-info text-white">Username & Time</div>
        <div className="card-body">this where the post would be</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
          {/* THIS IS ONE WAY TO DO IT */}
          {/* adding attribute to Comment = content is the name of the class, 
        //   you can change this to a unique name just as you would css id's
               syntax: classname='whatever you are passing' */}

          <Comment {...commentOne} />
          {/* here we are passing in the variable we created that has an object holding the key value pairs */}
          <Comment {...commentTwo} />
          {/* you can do it this way below or as above, above is using a spread operator {...variablename} it will not override any existing props */}
          <Comment content="More posts from us. c3" />
        </div>
      </div>
    );
  }
}
