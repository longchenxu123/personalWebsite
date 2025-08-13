
import './Hitokoto.less';
import { useState , useEffect} from 'react';
import debounce from '@/utils/debounce'
const Hitokoto = () => {
    const [hitokotoData, changehitokotoData] = useState({
        text: "“白月光最厉害的就在于，就算是本人来了，也比不过记忆中的那个她。”",
        from: "网络",
    })

    const textData = [
        {
            text: "抱最好的希望，做最坏的打算，尽最大的努力",
            from: " 淮上《破云》",
        },
        {
            text: "人的一生就像一出戏，只有落幕后才能判断这出戏的好坏",
            from: "林语堂 《苏东坡传》"
        },
        {
            text: "星星之火可以燎原",
            from: "伟大的毛主席",
        },
        {
            text: "你担心什么，什么就会控制你",
            from: "约翰洛克",
        },
        {
            text: "真正的微笑不用花一分钱，但却永远价值连城。",
            from: "互联网",
        },
        {
            text: "无论怎么样，一个人借故堕落总是不值得原谅的，越是没有人爱，越要爱自己。",
            from: "亦舒《星之碎片》",
        },
        {
            text: "如果放弃太早，你永远都不知道自己会错过什么。",
            from: "互联网",
        },
        {
            text: "春光不必趁早，冬霜不会迟到，相聚离开，全部刚刚好。",
            from: "张嘉佳",
        },
        {
            text: "每个人都有自己的天赋。如果用会不会爬树的能力去评判一条鱼，它终其一生以为自己愚蠢",
            from: "爱因斯坦",
        },
        {
            text: "有时一人独坐，其实并不寂寞，只想自己待会儿，别人却想太多",
            from: "老树",
        }
    ];

    let len = textData.length;
    function updateHitokoto() {
        debounce(() => {
            let value = Math.floor(Math.random() * len + 1);
            if (textData[value]) {
                changehitokotoData(textData[value]) 
            }
        })
    }

    let setValue = null;

    useEffect(() => {    
        setValue = setInterval(() => {
            let value = Math.floor(Math.random() * len + 1);
            if (textData[value]) {
                changehitokotoData(textData[value]) 
            }
        }, 60000)
        return () => {
            clearInterval(setValue)
        }
    }, [])



    return <div className='hitokoto cards'>
        <div key={hitokotoData.text} title={hitokotoData.text} className="content animate__bounceIn" onClick={ () => {updateHitokoto()} }>
            <span className="text">{ hitokotoData.text }</span>
            <span className="from">-「&nbsp;{ hitokotoData.from }&nbsp;」</span>
        </div>
    </div>
}

export default Hitokoto;