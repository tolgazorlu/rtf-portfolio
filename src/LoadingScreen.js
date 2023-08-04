import { useProgress } from "@react-three/drei";

const LoadingScreen = ({ started, onStarted }) => {
    const { progress } = useProgress();
    if(progress == 100){
        onStarted()
    }
    return (
        <div className={`container ${started ? "loadingScreen--started" : ""}`}>
<div className="loadingScreen">
          <div className="loadingScreen__progress">
            <div
              className="loadingScreen__progress__value"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
        </div>
        
      );
}

export default LoadingScreen