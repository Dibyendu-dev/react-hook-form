import "./App.css";
import { LogInForm } from "./forms/LogInForm";
import RegistrationForm from "./forms/RegistrationForm";

function App() {
  return (
    <>
      <div className="flex justify-center items-center"> 
        {/* <LogInForm/> */}
        <RegistrationForm/>
         </div>
    </>
  );
}

export default App;
