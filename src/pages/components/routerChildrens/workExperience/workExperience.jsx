import "./workExperience.less";
import Xbutton from "@/pages/childrenComponents/xbuttonTwo";
import { useNavigate } from "react-router-dom";

const WorkExperience = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate("/KnowMoreAbout");
  }

  return (
    <div className="WorkExperiencePage">
      <div className="goback" onClick={goBack}>
        <Xbutton text={"返回"}></Xbutton>
      </div>

      <main>
          <p>前端空城师</p>
      </main>
    </div>
  );
};

export default WorkExperience;
