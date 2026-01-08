export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <header style={styles.nav}>
        <button style={styles.menuBtn}>☰</button>
        <h2 style={styles.logo}>ZYLA</h2>

        <input
          style={styles.search}
          placeholder="Search products..."
        />

        <div style={styles.icons}>
          <span>♡</span>
          <span>👤</span>
          <span>🛒</span>
        </div>
      </header>

      {/* CATEGORY CARDS */}
      <section style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            style={styles.img}
          />
          <h3 style={styles.label}>Home & Living</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1600684296259-9c93a5bb94b6"
            style={styles.img}
          />
          <h3 style={styles.label}>Sports</h3>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer style={styles.footer}>
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter and get 10% off your first order</p>
      </footer>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "12px 18px",
    borderBottom: "1px solid #ddd"
  },
  logo: { marginRight: "auto" },
  menuBtn: {
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer"
  },
  search: {
    flex: 1,
    padding: "10px 14px",
    borderRadius: "999px",
    border: "1px solid #ccc"
  },
  icons: { display: "flex", gap: "14px", fontSize: "18px" },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
    padding: "18px"
  },
  card: {
    position: "relative",
    borderRadius: "18px",
    overflow: "hidden"
  },
  img: {
    width: "100%",
    height: "220px",
    objectFit: "cover"
  },
  label: {
    position: "absolute",
    bottom: "12px",
    left: "14px",
    color: "#fff"
  },

  footer: {
    background: "#000",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center"
  }
};
