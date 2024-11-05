import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreOutlined,
  TeamOutlined,
  CarOutlined,
  CrownOutlined,
  OrderedListOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: 'products',
      icon: <ShoppingCartOutlined />,
      label: 'Products',
    },
    {
      key: 'categories',
      icon: <AppstoreOutlined />,
      label: 'Categories',
    },
    {
      key: 'customers',
      icon: <UserOutlined />,
      label: 'Customers',
    },
    {
      key: 'masters',
      icon: <CrownOutlined />,
      label: 'Masters',
    },
    {
      key: 'drivers',
      icon: <CarOutlined />,
      label: 'Drivers',
    },
    {
      key: 'users',
      icon: <TeamOutlined />,
      label: 'All Users',
    },
    {
      key: 'orders',
      icon: <OrderedListOutlined />,
      label: 'Orders',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="p-4">
          <h1 className="text-white text-xl font-bold">Dashboard</h1>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['products']}
          mode="inline"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content className="m-4">
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;