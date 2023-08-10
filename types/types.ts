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
  price: number;
  id: string;
  quantity: number;
}

export interface CartContextProps {
  cart: Cart[];
  updateCart: (newItem: Cart) => void;
  increaseQuantity: (x: Cart) => void;
  decreaseQuantity: (x: Cart) => void;
  deleteItem: (x: Cart) => void;
}
