import { BrowserRouter } from "react-router-dom";
import UserRouter from "./routes/UserRouter";
//import TutorRouter from "./routes/TutorRouter";

const App = () => {
  return (
    <BrowserRouter>
      <UserRouter />
      {/* <TutorRouter /> */}
    </BrowserRouter>
  );
};

export default App;
