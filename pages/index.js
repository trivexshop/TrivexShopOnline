export default function Home() {
  return (
    <h1>Toko Online</h1>
  )
}

export default function Home() { const products = [ { id: 1, name: "Kaos Polos", price: "Rp 50.000", }, { id: 2, name: "Celana Jeans", price: "Rp 150.000", }, { id: 3, name: "Topi Trucker", price: "Rp 40.000", }, ];

return ( <div style={{ padding: "20px", fontFamily: "sans-serif", background: "#f4f4f4" }}> <h1 style={{ textAlign: "center", marginBottom: "30px" }}>🛒 Trivex Shop</h1> <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}> {products.map((product) => ( <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", borderRadius: "10px", textAlign: "center", background: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", }} > <h3>{product.name}</h3> <p>{product.price}</p> <button style={{ backgroundColor: "#0070f3", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer", }} onClick={() => alert(Membeli ${product.name})} > Beli </button> </div> ))} </div>

<footer style={{ marginTop: "50px", textAlign: "center", color: "#555" }}>
    <p>Kontak: <a href="https://t.me/YanzOfficialll" target="_blank">@YanzOfficialll</a></p>
  </footer>
</div>

); }

