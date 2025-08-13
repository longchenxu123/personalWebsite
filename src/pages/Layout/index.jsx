import "./index.less";
import "../../styles/index.less";
import "../../styles/glabal.less";
import { Layout, notification } from "antd";
import BackgroundImage from "./layoutComponents/backgroundImage/index";
import Loading from "./layoutComponents/Loading";
import { helloInit, checkDays } from "../../utils/getTime";
import { useSelector, useDispatch } from "react-redux";
import {
  setbackgroundShow,
  setInnerWidth,
  setmobileOpenState,
  setsetOpenState,
} from "../counterSlice";
import { useEffect } from "react";
import cursorInit from "../../utils/cursor.js";
import config from "../../../package.json";
import MainLeft from "./layoutComponents/MainLeft/MainLeft";
import MainRight from "./layoutComponents/MainRight/MainRight";
import Box from "../components/Box/Box";
import Footer from "./layoutComponents/Footer/Footer";
import MoreSet from "../components/MoreSet/MoreSet";
import { useNavigate } from "react-router-dom";

const LayoutPage = () => {
  const user = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValueFromChild = (value) => {
    Promise.resolve().then(() => {
      // 欢迎提示
      helloInit();
      // 默哀模式
      checkDays();
    });
  };

  // 页面宽度
  const getWidth = () => {
    dispatch(setInnerWidth(window.innerWidth));
  };

  // 鼠标中键事件
  window.addEventListener("mousedown", (event) => {
    if (event.button == 1) {
      dispatch(setbackgroundShow(!user.backgroundShow));
      notification["info"]({
        message: `已${user.backgroundShow ? "开启" : "退出"}壁纸展示状态`,
        icon: <img src='/logo192.png' style={{width: '30px'}}></img>
      });
    }
  });

  // 自定义鼠标
  cursorInit();
  // 屏蔽右键
  document.oncontextmenu = () => {
    notification["info"]({
      message: "为了浏览体验，本站禁用右键",
      grouping: true,
      duration: 2000,
      icon: <img src='/logo192.png' style={{width: '30px'}}></img>
    });
    return false;
  };

  useEffect(() => {
    // 监听当前页面宽度
    getWidth();
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resizr", getWidth);
    };
  }, []);

  function dotoClickItem(val) {
    if (val === 1) {
      navigate("/UserResume");
    } else if (val === 2) {
      navigate("/KnowMoreAbout");
    } else if (val === 3) {
      navigate("/perceptionSummary");
    }
  }

  // 控制台输出
  const styleTitle1 =
    "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
  const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
  const styleContent = "color: rgb(30,152,255);";
  const title1 = "龙晨旭个人主页";
  const content = `\n\n版本: ${config.version}\n主页`;
  console.info(
    `%c${title1} %c${content}`,
    styleTitle1,
    styleTitle2,
    styleContent
  );

  return (
    <>
      <Layout className="layoutName">
        <Loading />

        <BackgroundImage onValueChange={handleValueFromChild} />

        <main id="main">
          {/* {!user.backgroundShow &&  */}

          <div className="container">
            <div className="tabsUserItem">
              <ul>
                <li
                  onClick={() => dotoClickItem(1)}
                  className="cards hvr-wobble-top"
                >
                  <img className="img1" src="/logo192.png" alt="这是一个小鲨鱼"></img>
                  <p>个人简历</p>
                </li>
                <li
                  onClick={() => dotoClickItem(2)}
                  className="cards hvr-wobble-top"
                >
                  <img className="img2" src="https://i.ibb.co/n5WV3qS/sha1.png" alt="这是一个小鲨鱼"></img>
                  <p>了解更多</p>
                </li>
                <li
                  onClick={() => dotoClickItem(3)}
                  className="cards hvr-wobble-top"
                >
                  <img className="img3" src="https://i.ibb.co/9kcCTnZT/sha2.png" alt="这是一个小鲨鱼"></img>
                  <p>总结感悟</p>
                </li>
              </ul>
            </div>

            {!user.setOpenState && (
              <section className="all">
                <MainLeft />

                {!user.boxOpenState && 
                 <MainRight  />
                }


                {/* 时光胶囊 */}
                {user.boxOpenState && 
                    <Box /> 
                }
              </section>
            )}

            {user.setOpenState && (
              <section className="more">
                <MoreSet />
              </section>
            )}
          </div>
          {/* // } */}
        </main>

        {/* {!user.backgroundShow && ( */}
        <div style={{ display: !user.backgroundShow ? "block" : "none" }}>
          <div
            className="menu"
            onClick={() => {
              dispatch(setmobileOpenState(!user.mobileOpenState));
            }}
          >
            <img
              alt="这是一张图片"
              src={
                user.mobileOpenState
                  ? "/images/icon/chahao.png"
                  : "/images/icon/gang.png"
              }
            ></img>
          </div>
        </div>

        {/* )} */}

        <Footer
          className="f-ter"
          state={{
            display:
              !user.backgroundShow && !user.setOpenState ? "black" : "none",
          }}
        />
      </Layout>
    </>
  );
};

export default LayoutPage;
