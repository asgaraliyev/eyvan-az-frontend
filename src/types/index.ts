export interface Product {
  id: string;
  categoryId: string;
  name: string;
  price: number;
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  location: string;
}

export interface ProductOrder {
  id: string;
  productId: string;
  quantity: number;
  orderId: string;
}

export interface Customer {
  id: string;
  userId: string;
}

export interface Master {
  id: string;
  userId: string;
}

export interface Driver {
  id: string;
  userId: string;
}

export interface Order {
  id: string;
  customerId: string;
  driverId: string;
  masterId: string;
}