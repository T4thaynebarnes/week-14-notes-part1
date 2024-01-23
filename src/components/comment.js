import React, { Component } from "react";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

export default class Comment extends Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-info text-white">
          {this.props.username} {this.props.date}
        </div>
        {/* {this.props.content} = { this.props. classname of element} */}
        <div className="card-body">{this.props.content}</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
        </div>
      </div>
    );
  }
}
