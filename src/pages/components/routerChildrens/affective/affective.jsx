import "./affective.less";
import Xbutton from "@/pages/childrenComponents/xbuttonTwo";
import { useNavigate } from "react-router-dom";

const Affective = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate("/KnowMoreAbout");
  }

  return (
    <div className="AffectivePage">
      <div className="btngoback" onClick={goBack}>
        <Xbutton text={"返回"}></Xbutton>
      </div>

    
        <main>
            <div>忆</div>
          

            <p>叫声老公听下</p>

            <p style={{textAlign: 'right'}}>老公<i>(⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄)</i></p>
        </main>
    </div>
  );
};
export default Affective;
