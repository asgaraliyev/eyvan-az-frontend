import React from 'react';
import { Table, Button, Space, Input } from 'antd';
import type { Master } from '../types';

const Masters: React.FC = () => {
  const columns = [
    {
      title: 'Master ID',
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
      render: (_: any, record: Master) => (
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
        <h1 className="text-2xl font-bold">Masters</h1>
        <Button type="primary">Add Master</Button>
      </div>
      <div className="mb-4">
        <Input.Search placeholder="Search masters..." />
      </div>
      <Table<Master>
        columns={columns}
        dataSource={[]}
        rowKey="id"
      />
    </div>
  );
};

export default Masters;