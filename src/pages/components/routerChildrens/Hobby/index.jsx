import './Hobby.less';
import Xbutton from '@/pages/childrenComponents/xbuttonTwo';
import { useNavigate } from 'react-router-dom'

const Hobby = () => {
    const navigate = useNavigate();


    function goBack() {
        navigate('/KnowMoreAbout')
    }

    return (<div className='HobbyClass'>
                <div className='btngoback' onClick={goBack}>
                    <Xbutton text={'返回'}></Xbutton>
                </div>

                <div className="contentDiv">
                    <div style={{transform: 'rotate(5deg)'}} className="rotLeft rotTop pageBack home-page"></div>
                    <div className="rotRight rotTop pageBack home-page"></div>
                    <div className="container page cut-top home-page">
                        <div className="pageSubHeadLine">业余爱好</div>
                        <div className="pageHeadLine">龙晨旭</div>
                        <div className="pageDescription">A blog that you won't read.</div>
                    </div>
                </div>



            <main className='contentDiv'>
                <div className='container page cut-bottom'>
                    <div className='post-block cn'>
                        <h2 className='post-list-title'>
                            回忆往事
                        </h2>
                        <p>
                            在你上学的时候有没有遇到一个令你心动的他/她呢？如果遇到了那你们现在还在一起吗？
                        </p>
                    </div>

                    <div className='post-block cn'>
                        <h2 className='post-list-title'>
                            她
                        </h2>
                        <p>
                        海上月是天上月，眼前人是心上人的满心欢喜，是春日宴绿酒一杯，歌一遍，再拜陈三愿，一愿郎君千岁，二愿妾身常健，三愿如同梁上燕，岁岁常相见深情祈愿，是郎骑竹马来，绕床弄青梅的两小无猜，是寒来暑往，昼夜更迭，一笑一嗔，皆是你，一花一愁，全因你恋爱是风吹拂柳，时时念你
                        </p>
                    </div>

                    <div className='post-block cn'>
                        <h2 className='post-list-title'>
                            业余爱好
                        </h2>
                        <p>
                        要说我的业余爱好，其实也没那么五花八门，主要就集中在游戏、运动、音乐和写作这几块。<br></br><br></br>
                            一直向往的东西其实小时候就已经拥有了.<br></br><br></br>
                            当你看见河，你已在河之外。当你看见山，你已在山之外。当你能看见自己任何情绪，你就已在情绪之外。真正的强大不是对抗而是允许发生。你接纳什么，什么就会消失。你对抗什么，什么就会存在。执于一念，困于一念。一念放下，自在心间。
                        {/* 要说我的业余爱好，其实也没那么五花八门，主要就集中在游戏、运动、音乐和写作这几块。先聊聊游戏，<br></br>
                        《穿越火线》那可在我心里占着超重要的地位，
                        就好比男生初恋，想忘都忘不了。我还记得上小学那会，这游戏火得一塌糊涂，简直是大街小巷都在玩，说是当时最热门的游戏，绝对不夸张。
                        随便进个网吧瞅瞅，好家伙，十有八九的人都在那对着屏幕哒哒哒。那场面，呐喊声、枪击声，热闹得跟炸开了锅似的，我就这么被这股 “热浪” 给卷进去，
                        开启了我的游戏生涯。​<br></br>
                        再讲讲运动，这得归功于我在郑州上学的时候。由于放学较早，每天晚上睡的太早，导致我睡眠异常的充裕，精力特别旺盛，浑身上下都是劲，我说这不行啊，
                        有劲我得使出来啊，要是当时给我一个锄头我都能自己抛个二亩地，后来索性我就每天早上大清早去跑步，释放自己多余的力气，每天五点多，城市还在睡大觉呢，我就麻溜地爬起来，围着小镇子撒开腿跑。
                        跑啊跑，直到浑身汗如雨下，衣服都能拧出水来。跑的时候，我能清楚地感觉到自己的心跳，还能尽情享受清晨那宁静又清新的空气。这种感觉，
                        就像是给自己来了个 “活力大爆发”，一下子就把我征服了，从此就爱上了运动这事儿。​<br></br>
                        音乐对我来说，那就是个超贴心的 “心灵小伙伴”。心情不好，烦躁或者忧伤的时候，它立马就派上用场。一戴上耳机，那些音符就跟活过来似的，
                        在我耳边蹦跶，一下子就把我带到另一个世界。听摇滚的时候，感觉心里那些不痛快 “蹭” 地一下就被甩出去了；听古典音乐呢，就像有双温柔的手
                        ，把我心里的那些小疙瘩都给捋平了。在音乐的 “安抚” 下，我很快就能找回平静，又能开开心心面对生活啦。​<br></br>
                        最后说说写作，这事儿的开头挺逗的。上初中的时候，我脑子一热，写了本黑道小说，叫《邪魔校园》。现在回头看，那文笔简直没法看，
                        情节也幼稚得很，不过就是这么个 “歪打正着”，让我迷上了写作。后来，因为有了写小说的经历，我慢慢养成了写日记的习惯。在文字的世界里，
                        我可以天马行空地想象，把生活里的各种事儿、脑袋里冒出来的奇思妙想，都一股脑变成笔下的文字。不管是记记日常的鸡毛蒜皮，还是编编奇幻故事
                        ，每次敲键盘，就像是在跟自己唠嗑，在文字里，可以找到自我。 */}
                        </p>
                    </div>
                </div>
            </main>
    </div>)
}

export default Hobby