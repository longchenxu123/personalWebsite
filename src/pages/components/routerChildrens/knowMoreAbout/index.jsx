import "./KnowMoreAbout.less";
import Xbutton from '@/pages/childrenComponents/xbuttonTwo';
import { useNavigate } from 'react-router-dom'
const KnowMoreAbout = () => {

  const navigate = useNavigate();

  function goback() {
    navigate('/')
  }

  function KnowMoreAboutClick(type) {
    if (type === '1') {
      navigate('/hobby')
    } else if (type === '2') {

    } else if (type === '3') {
      navigate('/individual')
    } else if (type === '3a') {
      navigate('/affective')
    } else if (type === '5') {
      navigate('/character')
    }  else if (type === '6') {
      navigate('/workExperience')
    }
  }

  

  return (
    <div className="pageCompon knowMoreAboutClass">
        <div className="goback" onClick={goback}>
          <Xbutton text={'返回'}></Xbutton>
        </div>
      <main>
        <article onClick={() => KnowMoreAboutClick('1')}>
          <h3>业余爱好</h3>
          <figure>
            <img alt="这是一张图片" src="/images/icon/yyah.png" />
          </figure>
        </article>
        <article onClick={() => KnowMoreAboutClick('5')}>
          <h3>性格特点</h3>
          <figure>
          <img alt="这是一张图片" src="/images/icon/xgtd.png" />
          </figure>
        </article>
        <article  onClick={() => KnowMoreAboutClick('3')}>
          <h3>个人项目</h3>
          <figure>
          <img alt="这是一张图片" src="/images/icon/zg.png" />
          </figure>
        </article>
        <article  onClick={() => KnowMoreAboutClick('3a')}>
          <h3>感情经历</h3>
          <figure>
            <img alt="这是一张图片" src="/images/icon/gqjl.png" />
          </figure>
        </article>
        <article  onClick={() => KnowMoreAboutClick('6')}>
          <h3>工作经历</h3>
          <figure>
            <img alt="这是一张图片" src="/images/icon/gzjl.png" />
          </figure>
        </article>
      </main>
    </div>
  );
};

export default KnowMoreAbout;
