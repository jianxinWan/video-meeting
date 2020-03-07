import React from 'react';
import Header from '@/components/header'
import './index.css';

const Home = () => {
  return (
    <div className="App">
      <Header hasLogin={false} />
      <div className="content-wrapper">
        <div className="module-1">
          <div
            className="left-wrapper"
            style={{ backgroundImage: `url(${require('Images/2circle.png')})` }}>
            <h3>IMeeting</h3>
            <p className="desc">IMeeting 是新一代云视频会议产品，我们使用原生态WebRTC技术,打破传统会议必须下载客户端或插件的局限，解放会议限制，让沟通更加简单、快捷。</p>
            <div className="btn">立即使用</div>
          </div >
          <div className="right-wrapper">
            <img src={require('Images/banner1.png')} alt="home-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
