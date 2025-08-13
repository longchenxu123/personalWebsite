import './SocialLinks.less';
import socialLinksList from "@/assets/socialLinks.json";
import { useState } from 'react';
const SocialLinks = () => {
    const [socialTip, changesocialTip] = useState('通过这里联系我吧');
    return <>
        <div className="social">
            <div className="link">
                {
                    socialLinksList.map((item,index) => {
                        return <a href={item.url} key={index} target="_blank" 
                            onMouseLeave={ () => { changesocialTip('通过这里联系我吧') } }
                            onMouseEnter={() => { changesocialTip(item.tip) }}>
                            <img alt="这是一张图片" className="icon" style={{ width: item.size, height: item.size }} src={item.icon} height="24" />
                        </a>
                    })
                }
            </div>
            <span className="tip">{ socialTip }</span>
        </div>
    </>
}

export default SocialLinks;