import React from 'react';

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

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    maxWidth: '200px',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    margin: '10px 0',
  },
  price: {
    color: '#6c47f7',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addToCart: {
    backgroundColor: '#fff',
    border: '2px solid #6c47f7',
    color: '#6c47f7',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  buy: {
    backgroundColor: '#6c47f7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Card;
