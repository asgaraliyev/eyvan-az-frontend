import React from 'react';
import { Form, Input, Select, Button, InputNumber } from 'antd';
import type { Product } from '../../types';
import { mockCategories } from '../../data/mockData';

interface ProductFormProps {
  initialValues?: Product | null;
  onSave: (values: Product) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialValues,
  onSave,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    onSave({
      id: initialValues?.id || '',
      ...values,
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues || {}}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="name"
        label="Product Name"
        rules={[{ required: true, message: 'Please enter product name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="categoryId"
        label="Category"
        rules={[{ required: true, message: 'Please select a category' }]}
      >
        <Select>
          {mockCategories.map(category => (
            <Select.Option key={category.id} value={category.id}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: 'Please enter price' }]}
      >
        <InputNumber
          min={0}
          precision={2}
          prefix="$"
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item className="mb-0 flex justify-end">
        <Button className="mr-2" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          {initialValues ? 'Update' : 'Create'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;