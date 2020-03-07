import React from 'react'
import { Link } from 'react-router-dom'
import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd';

import Header from '@/components/header'
import './index.less'

const Register = () => {
  return (
    <div className="regiser-wrapper">
      <Header hasLogin={true} />
      <div className="register-content-wrapper">
        <div className="center-wrapper">
          <img alt="left" src={require('Images/register-1.png')} />
          <div className="register-form">
            <Form className="login-form">
              <Form.Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="register-form-button">
                  注册
          			</Button>
              </Form.Item>
              <Link to="/login"> 已有账号，去登录</Link>
            </Form>
          </div>
          <img alt="left" src={require('Images/register-2.png')} />
        </div>
      </div>
    </div>
  )
}

export default Register