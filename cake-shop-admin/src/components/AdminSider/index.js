import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import './style.css'

const { Sider } = Layout
const { SubMenu } = Menu

class AdminSider extends Component {
  state = {
    collapsed: false,
    defaultSelectedKeys: ['shop']
  }

  render() {
    const { collapsed, defaultSelectedKeys } = this.props

    return (
      <Sider className="sider" width="256" trigger={null} theme="dark" collapsed={collapsed}>
        <h1 className="dashboard__logo">
          <Icon className="logo" type="appstore-o" />
          <span className="title">Cake Shop Admin</span>
        </h1>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={defaultSelectedKeys}>
          <Menu.Item key="dashboard" onClick={this.handleMenuItemClick}>
            <Link to="/dashboard">
              <Icon type="dashboard" />
              <span>工作台</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="product"
            title={
              <span>
                <Icon type="area-chart" />
                <span>商品管理</span>
              </span>
            }
          >
            <Menu.Item key="publish_manage">
              <Link to="/product/manage">管理商品</Link>
            </Menu.Item>
            <Menu.Item key="add_product">
              <Link to="/product/add">新增商品</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="shop"
            title={
              <span>
                <Icon type="shop" />
                <span>店铺管理</span>
              </span>
            }
          >
            <Menu.Item key="check_manager">
              <Link to="/shop/check_manager">查看管理员</Link>
            </Menu.Item>
            <Menu.Item key="add_manager">
              <Link to="/shop/add_manager">新增管理员</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="user"
            title={
              <span>
                <Icon type="user" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="check_user">用户数据</Menu.Item>
            <Menu.Item key="setting_user">用户编辑</Menu.Item>
          </SubMenu>
          <SubMenu
            key="order"
            title={
              <span>
                <Icon type="profile" />
                <span>订单管理</span>
              </span>
            }
          >
            <Menu.Item key="check_order">查看订单</Menu.Item>
            <Menu.Item key="edit_order">修改订单</Menu.Item>
            <Menu.Item key="detail_order">订单详情</Menu.Item>
          </SubMenu>
          <SubMenu
            key="comment"
            title={
              <span>
                <Icon type="message" />
                <span>评论管理</span>
              </span>
            }
          >
            <Menu.Item key="check">查看评论</Menu.Item>
            <Menu.Item key="edit">编辑评论</Menu.Item>
          </SubMenu>
          <SubMenu
            key="activity"
            title={
              <span>
                <Icon type="gift" />
                <span>活动管理</span>
              </span>
            }
          >
            <Menu.Item key="check_activity">查看活动</Menu.Item>
            <Menu.Item key="add_activity">添加活动</Menu.Item>
            <Menu.Item key="edit_activity">活动编辑</Menu.Item>
          </SubMenu>
          <Menu.Item key="setting">
            <Icon type="setting" />
            <span>设置</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default AdminSider
