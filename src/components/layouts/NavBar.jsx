import { Menu, Layout, Avatar } from 'antd';
import styles from '../App.module.css';
const { Header } = Layout;

const navItems = [
  {
    label: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    key: 'alipay',
    children: [
      {
        label: 'Logout',
        key: 'setting:1'
      }
    ]
  }
];

const NavBar = () => {
  // const [current, setCurrent] = useState('alipay');

  // const onClick = (e) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };

  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">assignment</a>
      </div>
      <Menu
        theme="dark"
        // onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        items={navItems}
      />
    </Header>
  );
};

export default NavBar;
