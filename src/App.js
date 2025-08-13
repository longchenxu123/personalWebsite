import React, { Suspense } from "react";
import "./App.css";
import "animate.css";
import "./styles/hover.css";
import { Routes, Route } from "react-router-dom";

const Layout = React.lazy(() => import("./pages/Layout/index.jsx"));
const UserResume = React.lazy(() =>
  import("./pages/components/routerChildrens/UserResume/UserResume")
);
const Characteristics = React.lazy(() =>
  import("./pages/components/routerChildrens/characteristics")
);
const Hobby = React.lazy(() =>
  import("./pages/components/routerChildrens/Hobby")
);
const KnowMoreAbout = React.lazy(() =>
  import("./pages/components/routerChildrens/knowMoreAbout")
);
const PerceptionSummaryPage = React.lazy(() =>
  import("./pages/components/routerChildrens/perceptionSummary/perceptionSummary")
);

// 个人项目
const Individual = React.lazy(() =>
  import("./pages/components/routerChildrens/individual/individual")
);
const Affective = React.lazy(() =>
  import("./pages/components/routerChildrens/affective/affective")
);

const Character = React.lazy(() =>
  import("./pages/components/routerChildrens/character/character")
);
const WorkExperience = React.lazy(() =>
  import("./pages/components/routerChildrens/workExperience/workExperience")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>页面加载中...</div>}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/KnowMoreAbout" element={<KnowMoreAbout />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/characteristics" element={<Characteristics />} />
          <Route path="/userResume" element={<UserResume />} />
          <Route path="/perceptionSummary" element={<PerceptionSummaryPage />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/affective" element={<Affective />} />
          <Route path="/character" element={<Character />} />
          <Route path="/workExperience" element={<WorkExperience />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
