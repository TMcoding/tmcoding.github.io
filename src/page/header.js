import React, { Fragment } from "react";
import { Menu } from "antd";
import "./style.css";

export default (props) => {
  const { menuData } = props;
  return (
    <Fragment>
      <div className="head">
        <div className="headContain">
          <div style={{width:'22%',display:'inline-block',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
              <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" style={{width:'123px'}}/>
              <span style={{display:'inline-block',borderRight:'2px solid #fff',height:'20px'}}/>
              <div style={{fontSize:'14px',color:'#fff'}}>招聘官网</div>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={["1"]} style={{width:'50%'}}>
            {menuData.map((item) => (
              <Menu.Item key={item.keys}>{item.label}</Menu.Item>
            ))}
          </Menu>
          <div style={{width:'28%',color:'#fff',display:'inline-block',display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
            欢迎来到阿里巴巴集团招聘！ 登录 | 注册
          </div>
        </div>
      </div>
    </Fragment>
  );
};
