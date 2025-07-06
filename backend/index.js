import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "car",
      price: 100,
      image:
        "https://d2nn1d293raok6.cloudfront.net/public/posts/f73e95da4ffd/Screenshot_25-2-2025_164448_.jpeg",
    },
    {
      id: 2,
      name: "bike",
      price: 200,
      image:
        "https://d2nn1d293raok6.cloudfront.net/public/posts/f73e95da4ffd/Screenshot_25-2-2025_164448_.jpeg",
    },
    {
      id: 3,
      name: "honda",
      price: 300,
      image:
        "https://d2nn1d293raok6.cloudfront.net/public/posts/f73e95da4ffd/Screenshot_25-2-2025_164448_.jpeg",
    },
    {
      id: 4,
      name: "corolla",
      price: 400,
      image:
        "https://d2nn1d293raok6.cloudfront.net/public/posts/f73e95da4ffd/Screenshot_25-2-2025_164448_.jpeg",
    },
    {
      id: 5,
      name: "ferrari",
      price: 500,
      image:
        "https://d2nn1d293raok6.cloudfront.net/public/posts/f73e95da4ffd/Screenshot_25-2-2025_164448_.jpeg",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter(product=>
      product.name.includes(req.query.search));
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
