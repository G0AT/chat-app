import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="overflow-hidden rounded-md border-2 border-indigo-600 bg-gray-200" onSubmit={handleSubmit}>
      <input
        className="h-12 p-4 sm:w-4/5 lg:w-11/12 bg-white border-none outline-none text-md"
        placeholder="¿Qué idea tienes?"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="-top-1 relative cursor-pointer px-2 -mr-20 h-full">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="bg-transparent h-12 pl-12 cursor-pointer">
        <SendOutlined className="-top-1 relative ml-10 transform rotate-360 hover:scale-110 p-0"/>
      </button>
    </form>
  );
};

export default MessageForm;