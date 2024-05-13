
export default async (req, res) => {
  try {
    const { productId } = req.query
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();

    if (!data) {
      res.status(500).json({ success: false, error: "No data available" });
    }
  
    res.status(200).json({ success: true, product: data })

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}