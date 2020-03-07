import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import Header from '@/components/header'

import './index.less'
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<Header hasLogin={true} />
			<div className="login-content-wrapper">
				<div className="center-wrapper">
					<div className="left-wrapper" style={{ backgroundImage: `url(${require('Images/ditu2.png')})` }}>
						<img alt="square" className={`square1 square`} src={require("Images/zhengfangti.png")} />
						<img alt="square" className={`square2 square`} src={require("Images/zhengfangti.png")} />
						<img alt="square" className={`square3 square`} src={require("Images/zhengfangti.png")} />
					</div>
					<div className="login-wrapper">
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
								<Checkbox >Remember me </Checkbox>
								<a className="login-form-forgot" href="/find">
									Forgot password
          			</a>
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit" className="login-form-button">
									Log in
          			</Button>
							</Form.Item>		·
							<Link to="/register">立即注册</Link>
						</Form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login