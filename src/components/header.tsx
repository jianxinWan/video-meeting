import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  hasLogin?: boolean
}

const Header = (props: IProps) => {
  const { hasLogin = false } = props
  return (
    <header className="app-header">
      <div className="left-module">
        <Link to="/">IMetting</Link>
      </div>
      <div className="user-wrapper">
        {!hasLogin && (
          <>
            <Link to="/login">登录</Link>
            <Link to="register">注册</Link>
          </>
        )}
      </div>
      <style global jsx>
        {`
          .app-header{
            width: 100%;
            height: 64px;
            position: fixed;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #2B303B;
            color: #fff;
          }
          .app-header .left-module {
            margin-left: 120px;
          }
          .app-header .left-module a {
            display: block;
            cursor: pointer;
            color: #fff;
            text-decoration: none;
          }
          .user-wrapper {
            display: flex;
            flex-wrap: nowrap;
            margin-right: 60px;
          }
          .user-wrapper a{
            margin-left: 20px;
          }
        `}
      </style>
    </header>
  )
}

export default Header