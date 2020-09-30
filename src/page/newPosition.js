import React, { Fragment } from "react";
import { Card } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import "antd/dist/antd.css";

const positionArr = [
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
  {
    label: "杭州前端招聘",
    local: "杭州",
    time: "5分钟前",
  },
];
export default () => {
  return (
    <Fragment>
      <div className="newPosition">
        <div className="newPosition-content">
          <div className="newPosition-list">
            <Card title="最新职位" extra="更多" bodyStyle={{ padding: '0 8px' }}>
              <Slider
                autoplay
                slidesToShow={12}
                vertical={true}
                verticalSwiping={true}
                infinite={true}
                autoplaySpeed={1000}
                effect="fade"
              >
                {positionArr.map((item) => (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        height:'50px'
                      }}
                    >
                      <a>{item.label}</a>
                      <div style={{ display: "inline-block" }}>
                        {item.local}
                      </div>
                      <div style={{ display: "inline-block" }}>{item.time}</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Card>
          </div>
          <div style={{width: '310px',float:'right'}}>
            <a class="show-pic pic-1 jumpToAliyun" href="https://www.aliyun.com/careers" data-spm-click="gostr=/hr;locaid=aliyun" style={{textAlign:'center',lineHeight:'140px'}}><img style={{width:'179px',verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" /></a>
            <a class="show-pic pic-1 jumpToAliyun" href="https://www.aliyun.com/careers" data-spm-click="gostr=/hr;locaid=aliyun" style={{textAlign:'center',lineHeight:'140px'}}><img style={{width:'179px',verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" /></a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
