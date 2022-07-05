import { BorderlessTableOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import axios from 'axios';

import styles from './App.module.css';

import SideBar from './layouts/SideBar';
import NavBar from './layouts/NavBar';
import Content from './layouts/Content';

import DriveResults from './tables/DriveResults';
import InfluenceNegotiate from './tables/InfluenceNegotiate';
import MakeDecisions from './tables/MakeDecisions';
import ManageConflict from './tables/ManageConflict';
import ThinkLaterally from './tables/ThinkLaterally';

const contentLayout = {
  padding: '0px 24px 24px',
  minHeight: 'calc(100vh - 64px)'
};

const breadCrumbs = {
  margin: '16px 0'
};

const App = () => {
  const [tables, setTables] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [key, setKey] = useState(0);
  const param = useLocation().pathname;

  useEffect(() => {
    axios
      .get('/')
      .then((response) => {
        setTables(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.location.pathname === '/' ? setIsActive(false) : setIsActive(true);
  }, []);

  const handleKey = (key) => {
    setKey(key - 1);
  };

  const subNavItem = tables.map((table) => ({
    key: table.table_id,
    icon: <BorderlessTableOutlined />,
    label: (
      <Link to={`${table.table_link.toLowerCase()}`}>{table.table_name}</Link>
    )
  }));

  let pageRoute = tables.map((table) => table.table_name);

  let components = [
    <MakeDecisions
      path={tables[0] ? tables[0].table_link.toLowerCase() : '/'}
    />,
    <ThinkLaterally
      path={tables[1] ? tables[1].table_link.toLowerCase() : '/'}
    />,
    <InfluenceNegotiate
      path={tables[2] ? tables[2].table_link.toLowerCase() : '/'}
    />,
    <ManageConflict
      path={tables[3] ? tables[3].table_link.toLowerCase() : '/'}
    />,
    <DriveResults path={tables[4] ? tables[4].table_link.toLowerCase() : '/'} />
  ];

  let links = tables.map((table, index) => ({
    link: table.table_link.toLowerCase(),
    component: components[index]
  }));

  useEffect(() => {
    const index = links.findIndex((link) => link.link === param.slice(1));
    setKey(index);
  }, [links, param]);

  return (
    <Layout>
      <NavBar />
      <Layout hasSider className={styles.layout}>
        {isActive && (
          <SideBar
            subNavItem={subNavItem}
            handleKey={handleKey}
            appKey={key + 1}
          />
        )}
        <Layout style={contentLayout}>
          <Breadcrumb style={breadCrumbs}>
            <Breadcrumb.Item>
              <Link to="/" onClick={() => setIsActive(false)}>
                Home
              </Link>
            </Breadcrumb.Item>
            {isActive && (
              <Breadcrumb.Item
                className="pointer"
                onClick={() => setIsActive(true)}
              >
                {pageRoute[key]}
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
          <Content
            links={links}
            pageRoute={pageRoute}
            setIsActive={setIsActive}
            handleKey={handleKey}
          />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
