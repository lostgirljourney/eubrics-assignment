import axios from 'axios';
import { baseURL } from '../App';
import { useState, useCallback } from 'react';
import { Button, message, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { FileAddOutlined, ClearOutlined } from '@ant-design/icons';
import styles from './Utilities.module.css';

const CreateTodoForm = ({ placeholder, todoVal, path }) => {
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

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (value.length > 0) {
        try {
          let response = await axios.post(`${baseURL}/${path}`, {
            about: value
          });
          if (response.status === 200) {
            message.success('Todo added successfully.');
            clearOut();
          } else message.error('An error occured.');
          window.location = `/${path}`;
        } catch (error) {
          console.error(error);
        }
      }
    },
    [path, value]
  );

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
          <FileAddOutlined />
          add
        </Button>
        <Button className={styles.btnTop2} htmlType="button" onClick={clearOut}>
          <ClearOutlined />
          clear
        </Button>
      </Input.Group>
    </form>
  );
};

export default CreateTodoForm;
