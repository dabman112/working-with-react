const MessageList = () => {
  const messages = []; // Try adding messages to test

  return (
    <div>
      <h3>Messages</h3>
      {messages.length === 0 ? (
        <p>No new messages</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageList;
