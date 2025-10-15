const MessageList = () => {
  const messages = []; // Try adding some items to test

  return (
    <div>
      <h3>Exercise 7: Message List</h3>
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
