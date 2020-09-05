import React from 'react';
import { ThemeContext } from '../contextapp/ThemeContext';
import { AuthContext } from '../contextapp/AuthContext';

class Navbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(context) => {
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;
              const { isAuthenticated, toggleAuth } = authContext;

              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Sign out' : 'Sign in'}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
