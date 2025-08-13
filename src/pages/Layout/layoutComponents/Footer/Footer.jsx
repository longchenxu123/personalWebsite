import './Footer.less';
import { useSelector, useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';
import {useState} from 'react';
const Footer = () => {
    const user = useSelector((state) => state.counter);
    const [inProp, changeinProp] = useState(user.imgLoadStatus);
    const duration = 300;
    const fullYear = new Date().getFullYear();
    const startYear = '2020-10-24'.length >= 4 ? 
    '2020-10-24'.substring(0, 4) : null

    const siteUrl = () => {
        const url = import.meta.env.VITE_SITE_URL;
        if (!url) return "https://www.imsyy.top";
        // 判断协议前缀
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
          return "//" + url;
        }
        return url;
      };


    return <>
         <footer id="footer" className={user.footerBlur ? 'blur' : null}>
                <h1 hidden>React博客, 精美网站, 响应式网页, 个人网站模板, 博客网站, Web开发, 前端工程师, UI界面, 设计感网页, 技术文章, 简约风格, 程序员主页, 个人作品集</h1>
                <Transition in={inProp} timeout={duration}>
                    {
                        (!user.playerState || !user.playerLrcShow) && <div className="power">
                            <span>
                                <span className={startYear < fullYear ? 'c-hidden' : 'hidden'}>Copyright&nbsp;</span>
                                &copy;
                                {
                                    startYear < fullYear && <span
                                        className="site-start">
                                        { startYear }
                                        -
                                    </span>
                                }
                                { fullYear }
                                <span> 龙晨旭 个人网页</span>
                            </span>
                        </div>
                    }
                </Transition>
         </footer>
    </>
}

export default Footer;