import './Message.less'
import { setboxOpenState } from '@/pages/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import Xbutton from '@/pages/childrenComponents/xbutton'
const MessageName = () => {
    const user = useSelector((state) => state.counter);

    const dispatch = useDispatch();
    
    const changeBox = () => {
        dispatch(setboxOpenState(!user.boxOpenState));
    }

    return <>
        {/* 基本信息 */}
        <div className="message">
            {/* Logo */}
            <div className='logo description cards hvr-curl-top-left'>
                <img  className="logo-img1" title='隐藏起来了' src="/images/icon/logo.png" alt="logo" />
                <div className="name">
                        <span className="bg">
                            <div>
                                <Xbutton text={'龙晨旭'}></Xbutton>
                            </div>
                        </span>
                        <ul>
                            <li>
                                <label>居住地</label> <span>现居北京</span>
                            </li>
                            <li>
                                <label>所在行业</label> <span>计算机软件</span>
                            </li>
                            <li>
                                <label>职业经历</label> <span>前端工程师</span>
                            </li>
                            <li>
                                <label>教育经历</label> <span>东北林业大学 · 软件工程</span>
                            </li>
                            <li>
                                <label>个人简介</label> <span>
                                    前端空城师，微信公众号<a>web</a>前端魔术师，微信小程序搜索《帮你来记账》《随时开空调》 <a href='https://longchengxu.gpt4bot.us/'>https://longchengxu.gpt4bot.us/</a>
                                </span>
                            </li>
                        </ul>
                </div>
            </div>
            {/* 简介 */}

            <div className="description cards bottomText" onClick={() => changeBox()}>
                <div className="content">
                    <div className='text'>
                        { !user.boxOpenState ?  '笑只是一种表情，它与快乐无关！' : '过度思考未来，无异于毁掉现在的自己' }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MessageName;