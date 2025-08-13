import './Box.less';
import TimeCapsule from '../TimeCapsule/TimeCapsule';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setboxOpenState, setsetOpenState } from '@/pages/counterSlice';


const Box = () => {
    const user = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [closeShow, changecloseShow] = useState(false);

    return <>
         <div onMouseEnter={() => { changecloseShow(true) }} onMouseLeave={ () => {changecloseShow(false)} } className="box cards">
             {closeShow && <div> 
                 <img alt="这是一张图片" style={{ width: '20px', height: '20px' }}
                 onClick={() => { dispatch(setsetOpenState(true)) }}
                 className='setting' src='/images/icon/shezhi.png'></img>
                 
                 <img alt="这是一张图片" style={{ width: '20px', height: '20px' }} 
                 onClick={() => { dispatch(setboxOpenState(false)) }}
                 className="close" src='/images/icon/guanbi.png'></img>
             </div>}

            <div className='content'>
                <TimeCapsule/>
            </div>
         </div>
    </>
}

export default Box;