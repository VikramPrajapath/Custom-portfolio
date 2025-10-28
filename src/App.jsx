import React from 'react';

const navLinks = [
  { name: 'Animations', url: '#' },
  { name: 'Podcast Editing', url: '#' },
  { name: 'Long videos', url: '#' },
  { name: 'Reels', url: '#' },
  { name: 'Thumbnail', url: '#' },
  { name: 'Client Love', url: '#' },
];

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Vikram Prajapat</h1>
        <h2>Hi, I'm Vikram Prajapat!</h2>
        <p>I love what I do and I am here to build something big</p>
      </header>
      <nav className="nav">
        {navLinks.map(link => (
          <a key={link.name} href={link.url} className="nav-link">
            {link.name}
          </a>
        ))}
      </nav>
      <main className="main-content">
        <p>Select a category above to view my work.</p>
      </main>
    </div>
  );
}
