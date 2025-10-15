const BookList = () => {
  const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript"];

  return (
    <div>
      <h3>Book List</h3>
      <ol>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ol>
    </div>
  );
};

export default BookList;
