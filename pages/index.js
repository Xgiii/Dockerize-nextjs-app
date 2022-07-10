import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
