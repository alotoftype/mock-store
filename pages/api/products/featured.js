export default async (req, res) => {
  try {
    const mensResponse = await fetch("https://fakestoreapi.com/products/category/men's clothing");
    const mensData = await mensResponse.json();
    const womensResponse = await fetch("https://fakestoreapi.com/products/category/women's clothing");
    const womensData = await womensResponse.json();

    if (!mensData || !womensData) {
      res.status(500).json({ success: false, error: "No data available" });
    }

    // Feature the following items on the home page: Mens: id: 2, 6 Womens: id 17, 19
    // No men's product with id 6, using 4 instead
    const mensFeatured = mensData.filter(product => product.id === 2 || product.id === 4);
    const womensFeatured = womensData.filter(product => product.id === 17 || product.id === 19);
    const featured = [...mensFeatured, ...womensFeatured];
  
    res.statusCode = 200;
    res.json({ success: true, featured });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}