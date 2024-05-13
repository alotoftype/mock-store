export default async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/users/2");
    const data = await response.json();

    if (!data) {
      res.status(500).json({ success: false, error: "No data available" });
    }
  
    res.statusCode = 200;
    res.json({ success: true, user: data });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}