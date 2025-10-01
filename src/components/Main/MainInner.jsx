import MainBmx from "./MainBmx";
import MainSkate from "./MainSkate";
import MainRoller from "./MainRoller";

function MainInner() {
  return (
    <div className="main__inner">
      <MainBmx />
      <MainSkate />
      <MainRoller />
    </div>
  );
}

export default MainInner;
