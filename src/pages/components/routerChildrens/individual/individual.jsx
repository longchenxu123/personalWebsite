import "./individual.less";
import { useNavigate } from "react-router-dom";
import Xbutton from "@/pages/childrenComponents/xbuttonTwo";
import { deepClone } from "vuekit-js";
const Individual = () => {
  console.log(deepClone, "打印1212121212");
  const navigate = useNavigate();

  function goback() {
    navigate("/KnowMoreAbout");
  }

  return (
    <div className="IndividualPage">
      <div className="header_div">
        <div className="goback" onClick={goback}>
          <Xbutton text={"返回"}></Xbutton>
        </div>
        <header>项目经验</header>
        <div></div>
      </div>
      <main>
        <p>
          <b>微信小程序</b>
          <br />
          <span>《帮你来记账》</span>
        </p>
        <p>
          <b>微信小程序</b>
          <br />
          <span>《随时开空调》</span>
        </p>
        <p>
          <b>八进制加密库(周下载量最高超200)</b>
          <br />
          <a target='_blank' href="https://www.npmjs.com/package/lcx_encryption">链接跳转</a>
        </p>
        <p>
          <b>个人网站(React)搭建</b>
          <br />
          <a target='_blank' href="https://longchengxu.gpt4bot.us/">链接跳转</a>
        </p>
        <p>
          <b>鸿蒙开发app静态页面《熊猫社区》</b>
          <br />
          <a target='_blank' href="https://github.com/longchenxu123/HongmengDemoPandaCommunity">
            链接跳转
          </a>
        </p>
        <p>
          <b>vuekit-js 一个好用的js库</b>
          <br />
          <a href="https://www.npmjs.com/package/vuekit-js" target='_blank'>链接跳转</a>
        </p>
      </main>
    </div>
  );
};

export default Individual;
