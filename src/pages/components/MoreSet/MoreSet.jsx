import './MoreSet.less';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setsetOpenState } from '@/pages/counterSlice';
import { Col, Row , Card } from 'antd';
import Set from '../Set/Set'
const MoreSet = () => {

    const [closeShow, changecloseShow] = useState(false);
    const user = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [upDataObj, changeupDataObj] = useState({
        new: [
            "采用 React、react-redux 进行重构",
            "壁纸支持自定义个性化设置",
            "采用 redux-persist 进行 redux 持久化缓存",
            "配置less",
            "增加音乐播放器",
            "音乐播放器支持音量控制",
          ],
        fix: ["时光胶囊显示错误", "移动端动画及细节优化", "更换细腻图标", "修改首次进入壁纸加载过慢和首页加载过慢", 
        "整修项目文件夹火雨混乱的问题", "删除项目中多余的字体文件和冗余的代码", "增加网站icon", "修改网站边距细节"],
    })

    return <>
        <div className='set' onMouseEnter={() => { changecloseShow(true) }} onMouseLeave={ () => {changecloseShow(false)} }>

            {closeShow &&  <img alt="这是一张图片" style={{ width: '20px', height: '20px' }} 
                    onClick={() => { dispatch(setsetOpenState(false)) }}
                    className="close" src='/images/icon/guanbi.png'></img>}


            <Row gutter={[0, 0]} className='el-row'>
                <Col span={12} className='left'>
                    <div className="logo text-hidden">
                        <span className="bg">龙晨旭</span>
                        <span className="sm">.个人主页</span>
                    </div>

                    <Card className='update' title="网站更新日志">
                        <div className='upnote'>
                            {
                                upDataObj.new.map((item,index) => {
                                    return <div key={index} className="uptext">
                                        <img alt="这是一张图片" style={{ width: '20px', height: '20px' }}
                                            src='/images/icon/jia.png'
                                        ></img>
                                        <span>
                                            { item }
                                        </span>
                                    </div>
                                })
                            }
                            {
                                upDataObj.fix.map((item,index) => {
                                    return <div key={index} className="uptext">
                                     <img alt="这是一张图片" style={{ width: '20px', height: '20px' }}
                                            src='/images/icon/chongzi.png'
                                        ></img>
                                    <span>
                                            { item }
                                        </span>
                                  </div>
                                })
                            }
                        </div>
                    </Card>

                </Col>
                <Col span={12} className='right'>
                    <div className="title">
                        <img alt="这是一张图片" style={{ width: '20px', height: '20px' }} src='/images/icon/shezhi.png'></img>
                        <span className="name">全局设置</span>
                    </div>
                    <Set />
                </Col>
            </Row>
        </div>
    </> 
}

export default MoreSet;