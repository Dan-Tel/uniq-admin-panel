import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Form from "./components/form/Form";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col gap-10 items-start w-screen h-screen bg-slate-300">
        <Button />
        <Card />
        <Form />
      </div>
    </>
  );
}

export default App;
