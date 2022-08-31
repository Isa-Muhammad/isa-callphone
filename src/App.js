import Routes from "./routes";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, error } = useSelector((state) => state.loginReducer);

  return (
    <>
      <Routes status={isAuthenticated} />
    </>
  );
}

export default App;
