import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";
function App() {
  return (
    <>
      <div className="d-flex vh-100">
        <div className="w-20">
          <Sidebar />
        </div>
        <div className="w-50 ">
          <Feed />
        </div>
        <div className="w-30">
          <Suggestions />
        </div>
      </div>
    </>
  );
}
/*
bootstrap classes used:
bg-primary, bg-secondary, bg-info: sets background colors
d-flex: makes the container a flexbox
vh-100: sets the height to 100% of the viewport height
w-25 w-50 w-75 w-100 : sets the width to 25%, 50%, 75%, or 100% respectively

*/
export default App;
// rfce -- react functional component export
