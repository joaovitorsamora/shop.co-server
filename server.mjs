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
        image: ["/camisa-branco&preto-desktop.png"],
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
        image: ["/calça-jeans-desktop.png"],
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
        image: ["/camisa-laranja-desktop.png"],
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
        image: ["/camisa-verde-escura.png", "/camisa-verde-escura2.png", "/camisa-verde-escura3.png", "/camisa-verde-escura4.png"],
        title: "One Life Graphic T-shirt",
        starsReviewImage: "/Stars4-5.png",
        review: 4.5,
        price: 260,
        discount: "-40%",
        oldPrice: 300,
        style: "casual",
        colors: ["#006400", "#FFFFFF"],
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 11,
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
  ]
};

app.get("/products", (req, res) => {
  res.json(db.products);
});

app.get("/products/:id/image", (req, res) => { 
  const { id } = req.params;
  const product = db.products.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  
    const imageFilename = product.image[0];
  
  if (!imageFilename) {
    return res.status(404).json({ error: "Image not found" });
  }  
    const imagePath = path.join(__dirname, "public/images", imageFilename);
    
    res.sendFile(imagePath);  
});
  

app.get("/products/:id/starsReviewImage", (req, res) => { 
    const { id: id_review } = req.params;
    const productReview = db.products.find((p) => p.id === parseInt(id_review));
    if (!productReview) {
      return res.status(404).json({ error: "Product not found" });
    }
    
      const starsReviewimageFilename = productReview.starsReviewImage;
    
    if (!starsReviewimageFilename) {
      return res.status(404).json({ error: "Image not found" });
    }  
      const starsReviewimagePath = path.join(__dirname, "public/images", starsReviewimageFilename);
      
      res.sendFile(starsReviewimagePath);  
  });
    

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
