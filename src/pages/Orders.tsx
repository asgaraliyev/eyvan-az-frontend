import React, { useState } from 'react';
import { Table, Button, Space, Input, Tag } from 'antd';
import type { Order } from '../types';
import { mockOrders, mockUsers, mockCustomers } from '../data/mockData';

const Orders: React.FC = () => {
  const [orders] = useState<Order[]>(mockOrders);

  const getCustomerName = (customerId: string) => {
    const customer = mockCustomers.find(c => c.id === customerId);
    if (!customer) return 'Unknown';
    const user = mockUsers.find(u => u.id === customer.userId);
    return user ? `${user.firstname} ${user.lastname}` : 'Unknown';
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Customer',
      dataIndex: 'customerId',
      key: 'customerId',
      render: (customerId: string) => getCustomerName(customerId),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status: string) => (
        <Tag color={status === 'completed' ? 'success' : 'processing'}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Order) => (
        <Space size="middle">
          <Button type="primary">View Details</Button>
          <Button>Update Status</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button type="primary">Create Order</Button>
      </div>
      <div className="mb-4">
        <Input.Search placeholder="Search orders..." />
      </div>
      <Table<Order>
        columns={columns}
        dataSource={orders}
        rowKey="id"
      />
    </div>
  );
};

export default Orders;