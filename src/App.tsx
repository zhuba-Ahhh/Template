import React, { useEffect, useState } from "react";
import "./App.less"; // 导入您的 CSS 文件

const App = () => {
  const [activeProject, setActiveProject] = useState("React");

  useEffect(() => {
    document.title = `Project Showcase - ${activeProject}`;
  }, [activeProject]);

  const handleProjectClick = (project: React.SetStateAction<string>) => {
    setActiveProject(project);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          <button
            className={activeProject === "React" ? "active" : ""}
            onClick={() => handleProjectClick("React")}
            data-project="React"
          >
            React-Vite-Ts
          </button>
          <button
            className={activeProject === "Vue" ? "active" : ""}
            onClick={() => handleProjectClick("Vue")}
            data-project="Vue"
          >
            Vue-Vite-Ts
          </button>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="iframe-container">
            <iframe
              src={"React.html"}
              title="React-Vite-Ts"
              style={{ display: activeProject === "React" ? "block" : "none" }}
            ></iframe>
            <iframe
              src={"Vue.html"}
              title="Vue-Vite-Ts"
              style={{ display: activeProject === "Vue" ? "block" : "none" }}
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
