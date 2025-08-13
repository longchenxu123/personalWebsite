import './MainRight.less';
import { useSelector } from 'react-redux';
import Func from './mainRightComponents/Func/Func';
import Link from './mainRightComponents/Link/Link';
const MainRight = () => {
    const user = useSelector((state) => state.counter);

    return <>
        <div className={ user.mobileOpenState ? 'right rightContent' : 'right hidden rightContent' }>
        {/* 移动端 Logo  */}
            <div className="logo text-hidden" onClick={() => {
                store.mobileFuncState = !store.mobileFuncState
            }}>
                <span className="bg">龙晨旭</span>
                <span className="sm">.个人主页</span>
            </div>
            {/* 功能区 */}

            <Func />
           
            <Link />
        </div>
    </>
}

export default MainRight;