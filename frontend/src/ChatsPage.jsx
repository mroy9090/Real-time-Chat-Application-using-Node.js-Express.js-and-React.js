import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps=useMultiChatLogic(
        'd1eab426-105b-4d53-a833-536445cd238c',
        props.user.username,
        props.user.secret
    )
    return (
        <div style={{ height: '100vh' }}>
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
      );
  };
  export default ChatsPage;