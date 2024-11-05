import React from 'react';
import { Table, Button, Space, Input } from 'antd';
import type { Customer } from '../types';

const Customers: React.FC = () => {
  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Customer) => (
        <Space size="middle">
          <Button type="primary">View Details</Button>
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Button type="primary">Add Customer</Button>
      </div>
      <div className="mb-4">
        <Input.Search placeholder="Search customers..." />
      </div>
      <Table<Customer>
        columns={columns}
        dataSource={[]}
        rowKey="id"
      />
    </div>
  );
};

export default Customers;