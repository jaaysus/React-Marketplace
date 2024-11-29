import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      
      <div style={styles.logo}>Logo</div>

      <nav style={styles.menu}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>About Us</a>
        <a href="#" style={styles.link}>Service</a>
        <a href="#" style={styles.link}>Blog</a>
      </nav>

      <div style={styles.buttons}>
        <button style={{ ...styles.button, ...styles.signIn }}>Sign In</button>
        <button style={{ ...styles.button, ...styles.logIn }}>Log In</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 30px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  menu: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  signIn: {
    backgroundColor: '#6c47f7',
    color: '#fff',
    border: 'none',
  },
  logIn: {
    backgroundColor: '#fff',
    color: '#6c47f7',
    border: '2px solid #6c47f7',
  },
  linkHover: {
    color: '#6c47f7',
  },
};

export default Header;
