export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number; // Added stock for basic inventory
  dataAiHint: string; // Added for specific AI hints per product
}

export interface CartItem {
  product: Product;
  quantity: number;
}
