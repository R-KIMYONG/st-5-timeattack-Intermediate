import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { minusNum, plusNum } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [targetNum, setTargetNum] = useState(0);
  const num = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={targetNum}
          onChange={(e) => {
            setTargetNum(e.target.value);
          }}
        />{" "}
        만큼을{" "}
        <button
          onClick={() => {
            dispatch(plusNum(targetNum));
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            dispatch(minusNum(targetNum));
          }}
        >
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{num}</p>
      </div>
    </div>
  );
}

export default App;
