
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  inventory: number;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    category: "Lighting",
    price: 89.99,
    description: "A sleek, adjustable desk lamp with wireless charging base and touch controls.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    inventory: 23,
    featured: true
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 249.99,
    description: "Premium mesh office chair with lumbar support and adjustable armrests.",
    image: "https://images.unsplash.com/photo-1592078615290-033358fe5de7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    inventory: 15
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    price: 129.99,
    description: "Advanced noise-cancelling earbuds with spatial audio and 24-hour battery life.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    inventory: 42,
    featured: true
  },
  {
    id: 4,
    name: "Smart Water Bottle",
    category: "Accessories",
    price: 45.99,
    description: "Temperature-tracking water bottle that reminds you to stay hydrated.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    inventory: 31
  },
  {
    id: 5,
    name: "Minimalist Wallet",
    category: "Accessories",
    price: 39.99,
    description: "Slim RFID-blocking wallet made from premium recycled leather.",
    image: "https://images.unsplash.com/photo-1585504217868-d645d9e48229?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    inventory: 27
  },
  {
    id: 6,
    name: "Ceramic Coffee Set",
    category: "Kitchen",
    price: 79.99,
    description: "Handcrafted 6-piece ceramic coffee set in natural earth tones.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    inventory: 18,
    featured: true
  },
  {
    id: 7,
    name: "Smart Home Hub",
    category: "Electronics",
    price: 159.99,
    description: "Voice-controlled home automation hub with premium speaker.",
    image: "https://images.unsplash.com/photo-1558002038-1055e2e89a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    inventory: 22
  },
  {
    id: 8,
    name: "Wool Throw Blanket",
    category: "Home Decor",
    price: 69.99,
    description: "Soft, sustainable wool blanket woven with a subtle geometric pattern.",
    image: "https://images.unsplash.com/photo-1580301762395-83a1994416c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    inventory: 12
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
