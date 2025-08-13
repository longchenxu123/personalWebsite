import { useState , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setImgLoadStatus } from '@/pages/counterSlice';
import { message } from 'antd';

import './index.less'

const BackgroundImage = (props) => {
    const user = useSelector((state) => state.counter);
    const dispatch = useDispatch(); // 
    // const [bgUrl, changeUrl] = useState('/images/icon/pCrv7UU.jpg');
    const [bgUrl, changeUrl] = useState('');
    let imgTimeout = null;
    // 壁纸随机数
    // 请依据文件夹内的图片个数修改 Math.random() 后面的第一个数字
    const bgRandom = Math.floor(Math.random() * 10 + 1);
    const changeBg = (type) => {
        if (type === '0') {
            changeUrl(`/images/background${bgRandom}.jpg`)
        } else if (type === '1') {
            changeUrl("https://api.dujin.org/bing/1920.php")
        } else if (type === '2') {
            changeUrl("https://api.vvhan.com/api/wallpaper/views")
        } else if (type === '3') {
            changeUrl("https://api.vvhan.com/api/wallpaper/acg")
        } else if (type === '4') {
            changeUrl('https://i.ibb.co/Kp6djMBB/pCrv7UU.jpg')
        }
    };

    useEffect(() => {
        changeBg(user.coverType);
    }, [user.coverType])

    // 背景加载完成
    const imgLoadComplete = () => {
        imgTimeout = setTimeout(
            () => {
                dispatch(setImgLoadStatus(true))
            },
            Math.floor(Math.random() * (600 - 300 + 1)) + 300,
          );
    }

    // 背景加载失败
    const imgLoadError = () => {
        message.error("壁纸加载失败，已临时切换回默认");
        changeUrl(`/images/background${bgRandom}.jpg`)
    }

    const imgAnimationEnd = () => {
        props.onValueChange()
    }


    useEffect(() => {
        return () => {
            clearTimeout(imgTimeout)
        }
    }, []);
{/* <a href="https://ibb.co/YF2m7zJJ"><img src="https://i.ibb.co/YF2m7zJJ/pCrv7UU.jpg" alt="pCrv7UU" border="0" /></a> */}
    return <>
        <div className={user.backgroundShow ? 'cover show' : 'cover'}>
           <img alt="cover" 
                style={{ opacity: user.imgLoadStatus ? 1 : 0 }}
                onLoad={() => {imgLoadComplete()}}
                onError={() => {imgLoadError()}}
                onAnimationEnd={() => {imgAnimationEnd()}}
                src={bgUrl} className='bg'></img>
        </div>
    </>
}

export default BackgroundImage