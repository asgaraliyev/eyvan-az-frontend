import React, { useState } from 'react';
import { Table, Button, Space, Input } from 'antd';
import type { ProductCategory } from '../types';
import { mockCategories } from '../data/mockData';

const Categories: React.FC = () => {
  const [categories] = useState<ProductCategory[]>(mockCategories);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: ProductCategory, b: ProductCategory) => a.name.localeCompare(b.name),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: ProductCategory) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button type="primary">Add Category</Button>
      </div>
      <div className="mb-4">
        <Input.Search placeholder="Search categories..." />
      </div>
      <Table<ProductCategory>
        columns={columns}
        dataSource={categories}
        rowKey="id"
      />
    </div>
  );
};

export default Categories;