import React from 'react';

const movies = [
  { rank: 1, title: 'Superman', image: 'https://unsplash.com/photos/red-and-yellow-heart-sticker-on-black-wooden-door-6RcT6zEmm9A' },
  { rank: 2, title: 'Weapons', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=150' },
  { rank: 3, title: 'Sinners', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150' },
  { rank: 4, title: 'One Battle After Another', image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=150' },
  { rank: 5, title: 'Jurassic World: Rebirth', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150' },
  { rank: 6, title: 'Frankenstein', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=150' },
  { rank: 7, title: 'Happy Gilmore 2', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=150' },
  { rank: 8, title: 'Thunderbolts*', image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=150' },
  { rank: 9, title: 'Mission: Impossible - The Final Reckoning', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150' },
  { rank: 10, title: 'F1', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=150' },
];

export default function ImdbCard() {
  return (
    <div style={styles.card}>
      <h2 style={styles.header}>IMDb BEST OF 2025</h2>
      <h1 style={styles.title}>MOST POPULAR MOVIES</h1>
      
      <div style={styles.grid}>
        {movies.map((item) => (
          <div key={item.rank} style={styles.item}>
            <img src={item.image} alt={item.title} style={styles.avatar} />
            <span style={styles.rank}>{item.rank}</span>
            <span style={styles.movieTitle}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#2d63af',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    fontFamily: 'sans-serif',
  },
  header: {
    fontSize: '18px',
    margin: '0',
  },
  title: {
    fontSize: '22px',
    color: '#ffc0cb',
    margin: '5px 0 20px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  rank: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffc0cb',
  },
  movieTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
};