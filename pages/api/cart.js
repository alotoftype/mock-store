export default async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/user/2");
    const data = await response.json();

    if (!data) {
      res.status(500).json({ success: false, error: "No data available" });
    }

    // retrieve product data and keep separate from the cart object 
    const cart = data[0];
    const productsData = [];
    for (let product of cart.products) {
      const productResponse = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
      const productData = await productResponse.json();
      productsData.push(productData);
    }
  
    res.statusCode = 200;
    res.json({ success: true, cart, productsData });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}