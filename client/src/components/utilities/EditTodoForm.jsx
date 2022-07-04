import axios from 'axios';
import { baseURL } from '../App';
import { useState } from 'react';
import { Button, message, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { EditOutlined, ClearOutlined } from '@ant-design/icons';
import styles from './Utilities.module.css';

const EditTodoForm = ({ placeholder, todoVal, todoId, path }) => {
  const [value, setValue] = useState(todoVal);
  const [placeholderText] = useState(placeholder);

  const toast = () => {
    if (value.length <= 0) {
      message.error("Empty todo can't be added.");
    }
  };

  const clearOut = () => {
    setValue('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (value.length > 0) {
      try {
        let response = await axios.put(`${baseURL}/${path}/${todoId}`, {
          about: value
        });
        if (response.status === 200) {
          message.success('Todo editted successfully.');
          clearOut();
        } else message.error('An error occured.');
        window.location = `/${path}`;
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input.Group large>
        <Input
          prefix={<CheckOutlined />}
          className={styles.textInput}
          placeholder={placeholderText}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button
          className="mr-2"
          type="primary"
          htmlType="submit"
          onClick={() => {
            toast();
          }}
        >
          <EditOutlined />
          edit
        </Button>
        <Button className={styles.btnTop2} htmlType="button" onClick={clearOut}>
          <ClearOutlined />
          clear
        </Button>
      </Input.Group>
    </form>
  );
};

export default EditTodoForm;
