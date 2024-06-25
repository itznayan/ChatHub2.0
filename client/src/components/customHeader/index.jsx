import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

const CustomerHeader = ({ chat }) => {
  return (
    <div>
      <div className="chat-header">
        <div className="flexbetween group">
          <ChatBubbleLeftRightIcon className="icon-chat group-hover:scale-125 duration-300 " />
          <h3 className="header-text">{chat.title}</h3>
        </div>

        <div className="flexbetween">
          <PhoneIcon className="icon-phone hover:scale-150 duration-300" />

          {chat.description !== "⬅️ ⬅️ ⬅️" ? (
            <p className="header-text text-sm">{chat.description}</p>
          ) : (
            <p className="header-text text-sm">No Chat Selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerHeader;
