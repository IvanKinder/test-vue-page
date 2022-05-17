import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

export default {
  path: "/api",
  handler: app,
};

app.post(`/product`, async (req, res) => {
  const result = await prisma.product.create({
    data: {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imgSrc: req.body.imgSrc,
    },
  });
  res.json(result);
});

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.post("/delete", async (req, res) => {
  const productToDelete = await prisma.product.delete({
    where: {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imgSrc: req.body.imgSrc,
    },
  });
  res.json(productToDelete);
});
