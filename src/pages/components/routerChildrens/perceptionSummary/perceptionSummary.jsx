import './perceptionSummary.less';
import Xbutton from '@/pages/childrenComponents/xbuttonTwo';
import { useNavigate } from 'react-router-dom'

const PerceptionSummary = () => {
    const navigate = useNavigate();

    function goback() {
      navigate('/')
    }

    return <div className='perceptionSummaryPage'>
        <div className="goback" onClick={goback}>
          <Xbutton text={'返回'}></Xbutton>
        </div>
        
        <main>
           <ul>
               <li>~意气风发~</li>
           </ul>
        </main>
    </div>
}

export default PerceptionSummary;