import './Set.less';
import { Collapse, Radio , Space, notification} from 'antd';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setcoverType } from '@/pages/counterSlice';

const Set = () => {
    const { Panel } = Collapse;
    const user = useSelector((state) => state.counter);

    const [RadioValue, changeRadioValue] = useState(user.coverType);

    const dispatch = useDispatch();

    const GroupChange = (e) => {
        changeRadioValue(e.target.value);
        notification['success']({
            message: "切换成功",
            grouping: true,
            duration: 2000,
            icon: <img src='/logo192.png' style={{width: '30px'}}></img>
        });
        dispatch(setcoverType(e.target.value))
    }

    return <>
       <div className='setting'>    
        <Collapse ghost={false} defaultActiveKey={['1']} className='CollapseName'>
            <Panel header="个性壁纸" key="1" className='PanelName'>
                <Radio.Group  value={RadioValue} onChange={  GroupChange }>
                    <Space direction="vertical">
                        <Radio value="0">随机壁纸</Radio>
                        <Radio value="1">每日一图</Radio>
                        <Radio value="2">随机风景</Radio>
                        <Radio value="3">随机动漫</Radio>
                        <Radio value="4">默认壁纸</Radio>
                    </Space>
                </Radio.Group>
            </Panel>

            <Panel header="个性化调整" key="2">
            </Panel>

            <Panel header="播放器配置" key="3">
                {/* <p>{text}</p> */}
            </Panel>

            <Panel header="其他配置" key="4">
            </Panel>
        </Collapse>

       </div>
    </>
}

export default Set;