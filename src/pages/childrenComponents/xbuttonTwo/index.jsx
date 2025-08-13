import './index1.less';

const Xbutton = (props) => {
    return <div className='xbuttonTwo'>
        <a className="button-wrapper">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
            <span className="dot dot-4"></span>
            <span className="dot dot-5"></span>
            <span className="dot dot-6"></span>
            <span className="dot dot-7"></span>

            <span className="button bg-yellow-500 px-16 py-4 rounded-full uppercase">
                {props?.text ?? '这是一个按钮'}
            </span>
        </a>
        <div id="circle" className="circle bg-yellow-500"></div>
    </div>
}

export default Xbutton