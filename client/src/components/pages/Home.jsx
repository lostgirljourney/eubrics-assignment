import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

import styles from './Home.module.css';

let color = ['#816797', '#E8A0BF', '#C689C6', '#937DC2', '#A084CF'];

const Home = ({ links, pageRoute, setIsActive, handleKey }) => {
  const [colors, setColors] = useState(color);
  useEffect(() => {
    setColors(colors.sort(() => Math.random() - 0.5));
  }, [colors]);

  return (
    <div className={styles.homeParent}>
      <Row className={styles.rowFixes} gutter={16}>
        {[0, 1, 2].map((ind) => {
          return (
            <Col
              key={ind}
              className={styles.home}
              style={{ backgroundColor: colors[ind] }}
              span={8}
            >
              <Link
                to={links[ind] ? links[ind].link : '/'}
                onClick={() => {
                  setIsActive(true);
                  handleKey(ind + 1);
                }}
              >
                {pageRoute[ind]}
              </Link>
            </Col>
          );
        })}
      </Row>
      <Row className={styles.rowFixes} gutter={16}>
        {[3, 4].map((ind) => {
          return (
            <Col
              key={ind}
              className={styles.home}
              style={{ backgroundColor: colors[ind] }}
              span={12}
            >
              <Link
                to={links[ind] ? links[ind].link : '/'}
                onClick={() => {
                  setIsActive(true);
                  handleKey(ind + 1);
                }}
              >
                {pageRoute[ind]}
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
