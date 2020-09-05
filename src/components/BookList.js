import React, { useContext } from 'react';
import { ThemeContext } from '../contextapp/ThemeContext';
import { BookContext } from '../contextapp/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const renderedBooks = books.map(({ id, title }) => (
    <li key={id} style={{ color: theme.syntax, background: theme.bg }}>
      {title}
    </li>
  ));
  return (
    <div
      className='book-list'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>{renderedBooks}</ul>
    </div>
  );
};

export default BookList;
