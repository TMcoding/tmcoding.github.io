import React, { Fragment } from "react";
import { Input, Button } from "antd";
import "./style.css";
import "antd/dist/antd.css";

const hotData = ['JAVA', 'IOS', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端',]
export default () => {
  return (
    <Fragment>
      <div className="main">
        <img
          src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
          style={{ verticalAlign: "middle", width: "100%", height: "478px" }}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(31,56,88,0.40)",
          }}
        ></div>
        <div className="index-mid-box">
          <form style={{ margin: 0, padding: 0 }}>
            <div className="float-mid">
              <p
                style={{
                  fontSize: "54px",
                  color: "#fff",
                  lineHeight: "56px",
                  marginBottom: 0,
                }}
              >
                If not now, when?
              </p>
              <p
                style={{
                  fontSize: "54px",
                  color: "#fff",
                  lineHeight: "56px",
                  marginBottom: 0,
                }}
              >
                If not me, who?
              </p>
              <p
                style={{
                  fontSize: "54px",
                  color: "#fff",
                  lineHeight: "56px",
                  marginBottom: "38px",
                }}
              >
                此时此刻，非我莫属！
              </p>
              <div className="search">
                <div className="sear"></div>
                <Input className="searchInput" />
                <Button className=".searchBut">搜索</Button>
              </div>
              <div className="hotText">
                热门搜索： 
                {
                    hotData.map((item) => <a style={{color:'rgba(255,255,255,0.80)',paddingRight:'16px',fontSize:'10px'}} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition">{item}</a>)
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
