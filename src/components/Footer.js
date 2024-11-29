import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        <i>copyright DEVOPS202 – [Jay Sus AkA Kuro - I mean Issa El kaddaoui] – année 2024/2025</i>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
    marginTop: '20px',
  },
  text: {
    fontStyle: 'italic',
    margin: 0,
  },
};

export default Footer;
