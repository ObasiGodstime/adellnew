import React from 'react'
import './chat.css'


const MessageItem = ({owner, sender, senderAvatar, message}) => {
let messagePosition = (( owner == sender ) ? 'chatApp__convMessageItem--right' : 'chatApp__convMessageItem--left');
return (
    <div className={"chatApp__convMessageItem " + messagePosition + " clearfix"}>
        <img src={senderAvatar} alt={sender} className="chatApp__convMessageAvatar" />
        <div className="chatApp__convMessageValue" dangerouslySetInnerHTML={{__html: message}}></div>
    </div>
);
}

export default MessageItem
