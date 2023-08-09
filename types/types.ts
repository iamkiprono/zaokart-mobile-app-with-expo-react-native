export interface Products {
  _id: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  unit: string;
  image_url: string;
  is_featured: boolean;
  is_available: boolean;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface Cart {
  name: string;
  image: string;
  price: string;
}

export interface CartContextProps {
  cart: Cart[];
  updateCart: (newItem: Cart) => void;
}
