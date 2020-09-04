import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contextapp/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contextapp/AuthContext';

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
