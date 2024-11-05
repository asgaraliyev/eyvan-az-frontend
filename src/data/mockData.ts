// Mock data for all entities
export const mockProducts = [
  { id: '1', name: 'Espresso', categoryId: '1', price: 3.99 },
  { id: '2', name: 'Cappuccino', categoryId: '1', price: 4.99 },
  { id: '3', name: 'Croissant', categoryId: '2', price: 3.50 },
  { id: '4', name: 'Chocolate Muffin', categoryId: '2', price: 2.99 },
  { id: '5', name: 'Green Tea', categoryId: '3', price: 2.99 },
];

export const mockCategories = [
  { id: '1', name: 'Coffee' },
  { id: '2', name: 'Pastries' },
  { id: '3', name: 'Tea' },
];

export const mockUsers = [
  { id: '1', firstname: 'John', lastname: 'Doe', location: 'New York' },
  { id: '2', firstname: 'Jane', lastname: 'Smith', location: 'Los Angeles' },
  { id: '3', firstname: 'Mike', lastname: 'Johnson', location: 'Chicago' },
];

export const mockCustomers = [
  { id: '1', userId: '1' },
  { id: '2', userId: '2' },
];

export const mockMasters = [
  { id: '1', userId: '3' },
];

export const mockDrivers = [
  { id: '1', userId: '2' },
];

export const mockOrders = [
  { 
    id: '1', 
    customerId: '1', 
    driverId: '1', 
    masterId: '1',
    status: 'processing',
    date: '2024-02-20'
  },
  { 
    id: '2', 
    customerId: '2', 
    driverId: '1', 
    masterId: '1',
    status: 'completed',
    date: '2024-02-19'
  },
];