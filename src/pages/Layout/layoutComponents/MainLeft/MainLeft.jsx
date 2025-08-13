import './MainLeft.less';
import Message from './mainLeftComponents/Message/Message';
import SocialLinks from './mainLeftComponents/SocialLinks/SocialLinks';
import { useSelector } from 'react-redux';

const MainLeft = () => {
    const user = useSelector((state) => state.counter);

    return  <>
        <div className={ user.mobileOpenState ? 'left hidden' : 'left' }>
            <Message/>

            <SocialLinks/>
        </div>
    </>
}

export default  MainLeft;