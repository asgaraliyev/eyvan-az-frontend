import React from 'react';
import { Table, Button, Space, Input, Tag } from 'antd';
import type { Driver } from '../types';

const Drivers: React.FC = () => {
  const columns = [
    {
      title: 'Driver ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Status',
      key: 'status',
      render: () => (
        <Tag color="success">Available</Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Driver) => (
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
        <h1 className="text-2xl font-bold">Drivers</h1>
        <Button type="primary">Add Driver</Button>
      </div>
      <div className="mb-4">
        <Input.Search placeholder="Search drivers..." />
      </div>
      <Table<Driver>
        columns={columns}
        dataSource={[]}
        rowKey="id"
      />
    </div>
  );
};

export default Drivers;