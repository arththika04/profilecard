import logo from './logo.svg';
import './App.css';

import React from "react";

/* ---------- CHILD COMPONENT ---------- */
const ProfileCard = ({ name, age, bio, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.age}>Age: {age}</p>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

/* ---------- PARENT COMPONENT ---------- */
function App() {
  const profiles = [
    { name: "Arun", age: 22, bio: "Frontend Developer", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Kavi", age: 21, bio: "UI Designer", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Suresh", age: 24, bio: "React Learner", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Meena", age: 23, bio: "Backend Enthusiast", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Vijay", age: 25, bio: "Full Stack Dev", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Anu", age: 20, bio: "CS Student", image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { name: "Raj", age: 26, bio: "Software Engineer", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Divya", age: 22, bio: "Tech Blogger", image: "https://randomuser.me/api/portraits/women/8.jpg" },
    { name: "Manoj", age: 24, bio: "JavaScript Fan", image: "https://randomuser.me/api/portraits/men/9.jpg" },
    { name: "Priya", age: 23, bio: "UI/UX Learner", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { name: "Karthik", age: 27, bio: "React Native Dev", image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Nisha", age: 21, bio: "IT Undergraduate", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  ];

  return (
    <div style={styles.container}>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f6fb",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 3 rows × 4 cards
    gap: "30px",
    padding: "40px",
    justifyItems: "center",
  },
  card: {
    width: "230px",
    backgroundColor: "#fff",
    borderRadius: "14px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    transition: "transform 0.3s",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "12px",
  },
  name: {
    margin: "8px 0",
  },
  age: {
    fontWeight: "500",
    margin: "6px 0",
  },
  bio: {
    fontSize: "14px",
    color: "#555",
  },
};



export default App;
