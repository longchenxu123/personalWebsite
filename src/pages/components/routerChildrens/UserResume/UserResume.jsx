import "./UserResume.less";
import { useNavigate } from 'react-router-dom'
import Xbutton from '@/pages/childrenComponents/xbuttonTwo';
const UserResume = () => {
    const navigate = useNavigate();

    function goback() {
      navigate('/')
    }
  


    return <div className="UserResumeClass">
        <div className="goback" onClick={goback}>
          <Xbutton text={'返回'}></Xbutton>
        </div>

        <main>
            暂时无法查看
        </main>
    </div>
}

export default UserResume