import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '58dd51d0-2ce9-4f34-88d4-d3134a8b5592';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>;
  
    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        onNewMessage={()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
};

export default App;
