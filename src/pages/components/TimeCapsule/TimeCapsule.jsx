import "./TimeCapsule.less";
import { getTimeCapsule } from "../../../utils/getTime";
import { Progress } from "antd";

const TimeCapsule = () => {
  const getTimeCapsuleArr = getTimeCapsule();
  return (
    <>
      <div className="time-capsule">
        <div className="title">
          <img
            src="/images/icon/shalou.png"
            style={{ width: "20px", height: "20px" }}
          ></img>
          <span>时光胶囊</span>
        </div>

        <div className="all-capsule">
          {getTimeCapsuleArr.map((item, index) => {
            return (
              <div key={index} className="capsule-item">
                <div className="item-title">
                  <span className="percentage">
                    {item.data.name}已度过
                    <strong>{item.data.passed}</strong>
                    {item.tag === "day" ? "小时" : "天"}
                  </span>
                  <span className="remaining">
                    剩余&nbsp;{item.data.remaining}&nbsp;
                    {item.tag === "day" ? "小时" : "天"}
                  </span>
                </div>
                <Progress
                  percent={item.data.percentage}
                  style={{
                    "--width": item.data.percentage + "%",
                  }}
                  gapDegree={40}
                  strokeColor={"#fff"}
                ></Progress>
                {/* <el-progress :text-inside="true" :stroke-width="20" :percentage="parseFloat(item.percentage)" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeCapsule;
