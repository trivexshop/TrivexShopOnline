export default function Home() {
  return (
    <h1>Toko Online</h1>
  )
}

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Produk A",
      price: "Rp 50.000",
      image: "/images/https://files.catbox.moe/sb7pud.jpg",
    },
    {
      id: 2,
      name: "Produk B",
      price: "Rp 75.000",
      image: "/images/https://files.catbox.moe/sb7pud.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Toko Online</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button
              style={{
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert(`Membeli ${product.name}`)}
            >
              Beli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
