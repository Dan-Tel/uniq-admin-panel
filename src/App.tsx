import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import Table from "./components/table/Table";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col gap-10 pt-10 items-center w-screen h-screen bg-slate-300">
        <Button />
        <Card />
        <Form />
        <Table />
      </div>
    </>
  );
}

export default App;
