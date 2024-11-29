import React from 'react';
import Card from './Card';

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

const styles = {
  content: {
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
};

export default Content;
