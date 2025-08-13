import './index.less';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Loading = () => {
    const user = useSelector((state) => state.counter);

    const [flag, changFlag] = useState(false);
    useEffect(() => {
        changFlag(user.imgLoadStatus)
    }, [user.imgLoadStatus])
    return <>
        <div id="loader-wrapper" className={user.imgLoadStatus ? 'loaded' : null}>
            <div className="loader">
                <div className="loader-circle" />
                <div className="loader-text">
                    <span className="name">
                    </span>
                    <span className="tip"> 加载中 </span>
                </div>
            </div>

            <div className="loader-section section-left" />
            <div className="loader-section section-right" />
        </div>
    </>
}

export default Loading