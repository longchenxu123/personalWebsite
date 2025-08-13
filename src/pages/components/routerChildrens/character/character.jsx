import "./character.less";
import Xbutton from "@/pages/childrenComponents/xbuttonTwo";
import { useNavigate } from "react-router-dom";

const Character = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate("/KnowMoreAbout");
  }
  return (
    <div className="CharacterPage">
      <div className="btngoback" onClick={goBack}>
        <Xbutton text={"返回"}></Xbutton>
      </div>


      <main>
        <p>来自亲妹妹的评价</p>
        
        <img src='/images/icon/kkk.jpg'></img>
      </main>
    </div>
  );
};

export default Character;
