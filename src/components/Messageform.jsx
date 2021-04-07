import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import {PictureOutlined, SendOutlined} from '@ant-design/icons';

const MessageForm = (props) => {
    const {chatId, creds} = props;
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.lenght > 0) sendMessage(creds, chatId, {text});

        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files:event.target.files, text:''})
    }
     

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="message-input"
                placeholder="Escriba un mensaje"
                value={value}
                onchange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
            <input 
                type="file" 
                multiple={false}
                id="upload-button"
                style={{display:'none'}}   
                onChange={handleUpload}
            >
                false
            </input>
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    )
}

export default MessageForm