const ProductImage1 =require("../../assets/Products/ProductImage1.png");
const ProductImage2 =require("../../assets/Products/ProductImage2.png");
const ProductImage3 =require("../../assets/Products/ProductImage3.png");
const ProductImage4 =require("../../assets/Products/ProductImage4.png");

import { ProductProps } from "../types/product";

export const Products: ProductProps[] = [
  {
    title: "Torneira Puravida Hansgrohe",
    category: "Louças e Metais",
    images: [ProductImage1, ProductImage4, ProductImage2, ProductImage3],
    description:
      "Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.",
    details: [
      "Materials: 100% cotton, and lining Structured",
      "Adjustable cotton strap closure",
      "High quality embroidery stitching",
      "Head circumference: 21” - 24” / 54-62 cm",
      "Embroidery stitching",
      "One size fits most",
    ],
    information:
      "Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.",
    otherInformations: ["Style: Summer Hat", "Design: Plain", "Fabric: Jersey"],
  },
  {
    title: "Portobello Mont blanc Natural 90x90",
    category: "Pisos e porcelanato",
    images: [ProductImage2, ProductImage1, ProductImage3, ProductImage4],
    description:
      "Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.",
    details: [
      "Materials: 100% cotton, and lining Structured",
      "Adjustable cotton strap closure",
      "High quality embroidery stitching",
      "Head circumference: 21” - 24” / 54-62 cm",
      "Embroidery stitching",
      "One size fits most",
    ],
    information:
      "Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.",
    otherInformations: ["Style: Summer Hat", "Design: Plain", "Fabric: Jersey"],
  },
  {
    title: "Piso Portobllo Nord Cement Externo 90x90",
    category: "Pisos e porcelanato",
    images: [ProductImage3, ProductImage4, ProductImage1, ProductImage2],
    description:
      "Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.",
    details: [
      "Materials: 100% cotton, and lining Structured",
      "Adjustable cotton strap closure",
      "High quality embroidery stitching",
      "Head circumference: 21” - 24” / 54-62 cm",
      "Embroidery stitching",
      "One size fits most",
    ],
    information:
      "Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.",
    otherInformations: ["Style: Summer Hat", "Design: Plain", "Fabric: Jersey"],
  },
];
