import './Func.less';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'antd';
import Hitokoto from '../Hitokoto/Hitokoto';
import { getCurrentTime } from "@/utils/getTime";
import { useState, useEffect } from 'react';

const Func = () => {
    const user = useSelector((state) => state.counter);

    const [currentTime, changecurrentTime] = useState({});

    let setValue = null;
    
    useEffect(() => {
        updateTimeData();

        return () => {
            clearInterval(setValue)
        }
    }, []);

    // 更新时间
    const updateTimeData = () => {
        changecurrentTime(getCurrentTime())
    };    
    
    setValue = setInterval(updateTimeData, 1000);


    return <>
        <div className={user.mobileFuncState ? 'function mobile' : 'function'}>
            <Row className='el-row' gutter={[24, 24]}>
                <Col className='el-col' span={12}>
                    <div className="left">
                        <Hitokoto />
                        {/* <Music v-if="playerHasId" /> */}
                    </div>
                </Col>
                <Col className='el-col' span={12}>
                    <div className="rightTwo cards">
                        <div className="time">
                            <div className="date">
                                <span>{currentTime.year }&nbsp;年&nbsp;</span>
                                <span>{currentTime.month }&nbsp;月&nbsp;</span>
                                <span>{ currentTime.day }&nbsp;日&nbsp;</span>
                                <span className="sm-hidden">{ currentTime.weekday }</span>
                            </div>
                            <div className="text">
                                <span> { currentTime.hour }:{ currentTime.minute }:{ currentTime.second }</span>
                            </div>
                        </div>
                        {/* <Weather /> */}
                    </div>
                </Col>
            </Row>
        </div>
    </>
}
export default Func