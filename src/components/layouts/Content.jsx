import { /*Link,*/ Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/Home';

import styles from '../App.module.css';

const { Content } = Layout;

const ContentDiv = ({ links, pageRoute, setIsActive, handleKey }) => {
  return (
    <Content className={styles.siteLayoutBackground}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              links={links}
              pageRoute={pageRoute}
              setIsActive={setIsActive}
              handleKey={handleKey}
            />
          }
        ></Route>
        {links.map((link) => (
          <Route
            key={link.link}
            path={link.link}
            element={link.component}
          ></Route>
        ))}
      </Routes>
    </Content>
  );
};

export default ContentDiv;
