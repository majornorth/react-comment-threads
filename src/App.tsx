import * as React from "react";
import "./styles.css";
import * as Comments from "./types";

export default function App() {
  return (
    <div className="App">
      <Thread thread={exampleThread} />
    </div>
  );
}

// Thread

type ThreadProps = {
  thread: Comments.Thread;
};

// React component
// Shows message and any replies
const Thread: React.FC<ThreadProps> = props => {
  // State
  const [threadState, setThreadState] = React.useState<Comments.State>({
    thread: exampleThread,
    status: "viewing"
  });

  const [inputState, setInputState] = React.useState({
    value: "hello!"
  });

  // 1. Update input
  // 2. Create the message

  function createNewMessage() {
    // 1. Create a new thread state
    // 2. Create a new message object
    // 3. Add new message to new thread replies
    // 4. Update threadState

    const newThreadState = { ...threadState };

    newThreadState.thread.replies.push({
      id: "fourthMessage",
      messageOwner: userStewart,
      timeSent: 1,
      content: inputState.value
    });

    setThreadState(newThreadState);

    setInputState({ value: "" });
  }

  return (
    <div
      style={{
        padding: 16,
        width: 320,
        margin: "0 auto",
        borderRadius: 16,
        boxShadow: "0px 0px 50px rgba(0,0,0,.16)"
      }}
    >
      <Message message={threadState.thread.message} />
      <hr style={{ margin: "20px" }} />
      {threadState.thread.replies.map(reply => {
        return (
          <>
            <Message message={reply} />
            <hr style={{ margin: "20px" }} />
          </>
        );
      })}
      Reply:
      <input
        type=""
        id=""
        name=""
        value={inputState.value}
        onChange={event => {
          const value = event.target.value;
          setInputState({ value: value });
        }}
      />
      <button onClick={createNewMessage}>Send</button>
    </div>
  );
};

// Message

type MessageProps = {
  message: Comments.Message;
};

// React component
// Shows one message
const Message: React.FC<MessageProps> = props => {
  return (
    <div>
      <div className="Message">
        {props.message.content}
        <span>X</span>
      </div>
    </div>
  );
};

// Data

const userSteve: Comments.User = {
  id: "steve",
  firstName: "Steve",
  lastName: "Ruiz",
  profilePicture: "..."
};

const userStewart: Comments.User = {
  id: "stewart",
  firstName: "Stewart",
  lastName: "McCoy",
  profilePicture: "..."
};

const parentMessage: Comments.Message = {
  id: "firstMessage",
  messageOwner: userSteve,
  timeSent: 0,
  content: "Hello!"
};

const exampleThread: Comments.Thread = {
  id: "mythread",
  message: parentMessage,
  replies: [
    {
      id: "secondMessage",
      messageOwner: userStewart,
      timeSent: 1,
      content: "Hello mate!"
    },
    {
      id: "thirdMessage",
      messageOwner: userSteve,
      timeSent: 2,
      content: "Cheers!"
    }
  ]
};
