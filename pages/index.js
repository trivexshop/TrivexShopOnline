export default function Home() {
  const products = [
    { id: 1, name: "Produk A", price: "Rp 10.000" },
    { id: 2, name: "Produk B", price: "Rp 20.000" },
    { id: 3, name: "Produk C", price: "Rp 30.000" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>TrivexShopOnline</h1>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center"
          }}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href="https://t.me/trivexshop" target="_blank">
              <button style={{
                padding: "10px 20px",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "4px"
              }}>
                Beli Sekarang
              </button>
            </a>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: "50px", textAlign: "center", color: "#666" }}>
        &copy; 2025 TrivexShop. Hubungi kami di Telegram.
      </footer>
    </div>
  );
          }
