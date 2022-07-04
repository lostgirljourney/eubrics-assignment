import { Layout, Menu } from 'antd';
import styles from '../App.module.css';
const { Sider } = Layout;

const SideBar = ({ subNavItem, handleKey, appKey }) => {
  return (
    <Sider
      width={210}
      breakpoint="lg"
      collapsedWidth="0"
      className={styles.sideBar}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={[`${appKey}`]}
        items={subNavItem}
        style={{ height: '100%', borderRight: 0 }}
        onClick={(e) => handleKey(e.key)}
      />
    </Sider>
  );
};

export default SideBar;
