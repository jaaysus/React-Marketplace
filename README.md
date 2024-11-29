
# Project Overview

This project consists of a simple React application with a header, content section, and footer. Below are the components and their respective code snippets.

## Header Component

The `Header` component includes a logo, navigation menu, and buttons for signing in and logging in.

```javascript
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
```

## Card Component

The `Card` component displays a product with an image, title, price, and buttons to add the product to the cart or buy it.

```javascript
const Card = ({ imageSrc, title, price }) => {
  return (
    <div style={styles.card}>
      <img src={imageSrc} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.price}>${price}</p>
      <div style={styles.buttons}>
        <button style={styles.addToCart}>Add to Cart</button>
        <button style={styles.buy}>Buy</button>
      </div>
    </div>
  );
};
```

## Content Component

The `Content` component displays a list of products using the `Card` component.

```javascript
const Content = () => {
  return (
    <div style={styles.content}>
      <h1 style={styles.title}>Our Products</h1>
      <div style={styles.cardsContainer}>
        {/* Pass the correct image paths to each card */}
        <Card imageSrc="/ps5.jpg" title="PS5" price="499.99" />
        <Card imageSrc="/3ds.png" title="3DS" price="199.99" />
        <Card imageSrc="/seriesX.png" title="Series X" price="499.99" />
      </div>
    </div>
  );
};
```

## Footer Component

The `Footer` component displays a copyright notice.

```javascript
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        <i>copyright DEVOPS202 – [Jay Sus AkA Kuro - I mean Issa El kaddaoui] – année 2024/2025</i>
      </p>
    </footer>
  );
};
```

## App Component

The `App` component combines the `Header`, `Content`, and `Footer` components to form the complete application.

```javascript
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
```

## Final Result

Here's the final result:

!Final Result
![image](https://github.com/user-attachments/assets/07d42e8a-6304-4062-b391-2425fefefa8e)

```
