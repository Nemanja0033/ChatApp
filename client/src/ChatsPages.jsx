import { PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    
    return(
       <div style={{height: '100vh'}}>
        <PrettyChatWindow 
        projectId='d9b21d1e-2762-4a70-861a-478abe16030a'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
       </div>
    )
}

export default ChatsPage;