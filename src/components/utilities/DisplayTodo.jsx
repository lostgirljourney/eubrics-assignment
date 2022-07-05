import { EditFilled, DeleteOutlined } from '@ant-design/icons';
import { Space, Table, Button, Modal } from 'antd';
import { useState, useEffect } from 'react';
import { baseURL } from '../App';
import EditTodoForm from './EditTodoForm';
import axios from 'axios';

const DisplayTodo = ({ path }) => {
  const [visible, setVisible] = useState(false);
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get(`${baseURL}/${path}`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.error(error));
  }, [path]);

  const delTodo = async (id) => {
    try {
      const deletetodo = await axios.delete(`${baseURL}/${path}/${id}`);
      setTodos(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      title: 'Sl. No.',
      dataIndex: 'sno',
      key: 'sno',
      render: (text) => <span>{text}</span>
    },
    {
      title: 'Todo',
      dataIndex: 'about',
      key: 'about'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setTodo(record.about);
              setId(record.id);
              setVisible(true);
            }}
          >
            <EditFilled /> edit
          </Button>
          <Button type="primary" danger onClick={() => delTodo(record.id)}>
            <DeleteOutlined />
            delete
          </Button>
        </Space>
      )
    }
  ];

  const data = todos.map((td, index) => ({
    sno: index + 1,
    ...td
  }));

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit todo"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[null]}
        destroyOnClose={true}
        keyboard={false}
      >
        <EditTodoForm
          placeholder={'edit your todo...'}
          todoVal={todo}
          todoId={id}
          path={path}
        />
      </Modal>
    </>
  );
};

export default DisplayTodo;
