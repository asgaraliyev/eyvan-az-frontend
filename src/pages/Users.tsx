import React, { useState } from 'react';
import { Table, Button, Space, Input, Tag } from 'antd';
import type { User } from '../types';
import { mockUsers, mockCustomers, mockMasters, mockDrivers } from '../data/mockData';

const Users: React.FC = () => {
  const [users] = useState<User[]>(mockUsers);

  const getUserRoles = (userId: string) => {
    const roles = [];
    if (mockCustomers.some(c => c.userId === userId)) roles.push('Customer');
    if (mockMasters.some(m => m.userId === userId)) roles.push('Master');
    if (mockDrivers.some(d => d.userId === userId)) roles.push('Driver');
    return roles;
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
      sorter: (a: User, b: User) => a.firstname.localeCompare(b.firstname),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
      sorter: (a: User, b: User) => a.lastname.localeCompare(b.lastname),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Role',
      key: 'role',
      render: (_: any, record: User) => (
        <Space>
          {getUserRoles(record.id).map(role => (
            <Tag color={role === 'Customer' ? 'blue' : role === 'Master' ? 'gold' : 'green'} key={role}>
              {role}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: User) => (
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
        <h1 className="text-2xl font-bold">Users</h1>
        <Button type="primary">Add User</Button>
      </div>
      <div className="mb-4">
        <Input.Search placeholder="Search users..." />
      </div>
      <Table<User>
        columns={columns}
        dataSource={users}
        rowKey="id"
      />
    </div>
  );
};

export default Users;