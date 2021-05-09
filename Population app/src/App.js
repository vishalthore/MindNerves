import { Fragment } from "react";
import Form from "./components/UI/Form";
import Header from "./components/UI/Header";
import Table from "./components/UI/Table";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
      <Form />
      <Table />
      </main>
    </Fragment>
  );
}

export default App;
