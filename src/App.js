import Routes from "./routes";
import { useSelector } from "react-redux";

function App() {
  const { loginRequesting, error } = useSelector((state) => state.loginReducer);

  return (
    <>
      <Routes status={loginRequesting} />
    </>
  );
}

export default App;
