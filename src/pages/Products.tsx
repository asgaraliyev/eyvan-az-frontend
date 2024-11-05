import React, { useState } from 'react';
import { Table, Button, Space, Input, Modal, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { Product } from '../types';
import { mockProducts, mockCategories } from '../data/mockData';
import ProductForm from '../components/Products/ProductForm';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleDelete = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
    message.success('Product deleted successfully');
  };

  const handleSave = (product: Product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
      message.success('Product updated successfully');
    } else {
      setProducts([...products, { ...product, id: String(products.length + 1) }]);
      message.success('Product added successfully');
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: Product, b: Product) => a.name.localeCompare(b.name),
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
      render: (categoryId: string) => 
        mockCategories.find(cat => cat.id === categoryId)?.name || categoryId,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a: Product, b: Product) => a.price - b.price,
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Product) => (
        <Space size="middle">
          <Button 
            type="primary" 
            icon={<EditOutlined />}
            onClick={() => {
              setEditingProduct(record);
              setIsModalOpen(true);
            }}
          >
            Edit
          </Button>
          <Button 
            danger 
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
        >
          Add Product
        </Button>
      </div>
      <div className="mb-4">
        <Input.Search placeholder="Search products..." />
      </div>
      <Table<Product>
        columns={columns}
        dataSource={products}
        rowKey="id"
      />
      <Modal
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        footer={null}
      >
        <ProductForm
          initialValues={editingProduct}
          onSave={handleSave}
          onCancel={() => {
            setIsModalOpen(false);
            setEditingProduct(null);
          }}
        />
      </Modal>
    </div>
  );
};

export default Products;