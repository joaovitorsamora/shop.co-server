import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public/images")));
app.use(cors());

const db = {
  products: [
    {
      id: 1,
      image: ["/gradient-tshirt-desktop.png"],
      title: "Gradient Graphic T-shirt",
      starsReviewImage: "/Stars3-5.png",
      review: 3.5,
      price: 145,
      style: "casual",
      colors: ["#FF5733", "#33FF57", "#5733FF"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 2,
      image: ["/polo-marrom-desktop.png"],
      title: "Polo with Tipping Details",
      starsReviewImage: "/Stars4-5.png",
      review: 4.5,
      price: 180,
      style: "casual",
      colors: ["#6F4E37", "#FFFFFF"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 3,
      image: ["/polo-branco&preto-desktop.png"],
      title: "Black Striped T-shirt",
      starsReviewImage: "/Stars5.png",
      review: 5.0,
      price: 180,
      discount: "-30%",
      oldPrice: 150,
      style: "casual",
      colors: ["#000000", "#FFFFFF"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 4,
      image: ["/calça-jeans2.png"],
      title: "SKINNY FIT JEANS",
      starsReviewImage: "/Stars3-5.png",
      review: 3.5,
      price: 240,
      discount: "-20%",
      oldPrice: 260,
      style: "casual",
      colors: ["#1C1C1C", "#2F4F4F"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 5,
      image: ["/camisa-xadreza.png"],
      title: "CHECKERED SHIRT",
      starsReviewImage: "/Stars4-5.png",
      review: 4.5,
      price: 180,
      style: "casual",
      colors: ["#8B0000", "#FFFFFF"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 6,
      image: ["/camisa-laranja&preta.png"],
      title: "SLEEVE STRIPED T-SHIRT",
      starsReviewImage: "/Stars4-5.png",
      review: 4.5,
      price: 130,
      discount: "-30%",
      oldPrice: 160,
      style: "casual",
      colors: ["#FFA500", "#000000"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 7,
      image: ["/camisa-verde.png"],
      title: "VERTICAL STRIPED SHIRT",
      starsReviewImage: "/Stars5.png",
      review: 5.0,
      price: 212,
      discount: "-20%",
      oldPrice: 232,
      style: "casual",
      colors: ["#32CD32", "#FFFFFF"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 8,
      image: ["/camisa-laranja2.png"],
      title: "COURAGE GRAPHIC T-SHIRT",
      starsReviewImage: "/Stars4.png",
      review: 4.0,
      price: 145,
      style: "casual",
      colors: ["#FFA500", "#FFFFFF"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 9,
      image: ["/short-jeans.png"],
      title: "LOOSE FIT BERMUDA SHORTS",
      starsReviewImage: "/Stars3-5.png",
      review: 3.0,
      price: 80,
      style: "casual",
      colors: ["#4682B4"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    },
    {
      id: 10,
      image: ["/polo-azul-clara-desktop.png"],
      title: "Polo with Contrast Trims",
      starsReviewImage: "/Stars4.png",
      review: 4.0,
      price: 212,
      discount: "-20%",
      oldPrice: 242,
      style: "casual",
      colors: ["#ADD8E6", "#FFFFFF"],
      sizes: ["Small", "Medium", "Large", "X-Large"]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah M.",
      quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      starsReviewImage: "/Stars4.png",
      verificationImage: "/verification.png"
    },
    {
      id: 2,
      name: "Samantha D.",
      quote: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      starsReviewImage: "/Stars3-5.png",
      verificationImage: "/verification.png"
    },
    {
      id: 3,
      name: "Ethan R.",
      quote: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      starsReviewImage: "/Stars4-5.png",
      verificationImage: "/verification.png"
    },
    {
      id: 4,
      name: "Liam K.",
      quote: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      starsReviewImage: "/Stars3-5.png",
      verificationImage: "/verification.png"
    },
    {
      id: 5,
      name: "Alex M.",
      quote: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      starsReviewImage: "/Stars3-5.png",
      verificationImage: "/verification.png"
    },
    {
      id: 6,
      name: "Olivia P.",
      quote: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      starsReviewImage: "/Stars3-5.png",
      verificationImage: "/verification.png"
    },
    {
      id: 7,
      name: "Ava H.",
      quote: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      starsReviewImage: "/Stars3-5.png",
      verificationImage: "/verification.png"
    }
  ]
};



app.get("/products", (req, res) => {
  res.status(200).json(db.products);
});


app.get("/products/category/:category", (req, res) => {
  const { category } = req.params;
  const products = db.products.filter((p) => p.style === category);
  if (products.length === 0) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.status(200).json(products);
});


app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = db.products.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
});


app.post("/products", (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  db.products.push(newProduct);
  res.status(201).json(newProduct);
});


app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = db.products.findIndex((p) => p.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  db.products[index] = { ...db.products[index], ...req.body };
  res.status(200).json(db.products[index]);
});


app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = db.products.findIndex((p) => p.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  db.products.splice(index, 1);
  res.status(204).send();
});



app.get("/cart", (req, res) => {
  res.status(200).json(db.cart || []);
});

app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;
  const product = db.products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  const cartItem = { id: Date.now(), productId, quantity };
  db.cart.push(cartItem);
  res.status(201).json(cartItem);
});

app.delete("/cart/:id", (req, res) => {
  const { id } = req.params;
  const index = db.cart.findIndex((item) => item.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Item not found in cart" });
  }
  db.cart.splice(index, 1);
  res.status(204).send();
});



app.get("/testimonials", (req, res) => {
  res.status(200).json(db.testimonials);
});

app.get("/testimonials/:id", (req, res) => {
  const { id } = req.params;
  const testimonial = db.testimonials.find((t) => t.id === parseInt(id));
  if (!testimonial) {
    return res.status(404).json({ error: "Testimonial not found" });
  }
  res.status(200).json(testimonial);
});

app.post("/testimonials", (req, res) => {
  const newTestimonial = { id: Date.now(), ...req.body };
  db.testimonials.push(newTestimonial);
  res.status(201).json(newTestimonial);
});



app.get("/products/:id/image", (req, res) => {
  const { id } = req.params;
  const product = db.products.find((p) => p.id === parseInt(id));
  if (!product || !product.image?.[0]) {
    return res.status(404).json({ error: "Image not found" });
  }
  const imagePath = path.join(__dirname, "public/images", product.image[0]);
  res.sendFile(imagePath);
});

app.get("/products/:id/starsReviewImage", (req, res) => {
  const { id } = req.params;
  const product = db.products.find((p) => p.id === parseInt(id));
  if (!product || !product.starsReviewImage) {
    return res.status(404).json({ error: "Stars review image not found" });
  }
  const imagePath = path.join(__dirname, "public/images", product.starsReviewImage);
  res.sendFile(imagePath);
});

app.get("/testimonials/:id/verification", (req, res) => {
  const { id } = req.params;
  const testimonial = db.testimonials.find((t) => t.id === parseInt(id));
  if (!testimonial || !testimonial.verificationImage) {
    return res.status(404).json({ error: "Verification image not found" });
  }
  const imagePath = path.join(__dirname, "public/images", testimonial.verificationImage);
  res.sendFile(imagePath);
});



app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});