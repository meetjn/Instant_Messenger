import { useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
const [open, setOpen] = useState(false);
const handleEmojiClick = e => {}
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>John doe</span>
                        <p>some random text</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message" />
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen ((prev => !prev))} />
                    <EmojiPicker open = {open}/>
                </div>
                <button className="sendButton"> Send</button>
            </div>
        </div>
    )
}

export default Chat