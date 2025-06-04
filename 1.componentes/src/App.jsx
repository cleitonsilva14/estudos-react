import "./App.css";
import "./App2.css"

// importar o componente filho
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";
import Props2 from "./components/Props2";

function App() {
  return (
    <>
      <h1>Hello World ReactJS</h1>

      {/* Comentário */}
      {/* Utiliza o compomente importado no JSX */}


      <ClassComponent/>
      <FunctionalComponent />
      <PropsExample nome="Cajuzinho" idade="2"/>
      <Props2 nome="Caju" cor="Laranjado"/>

    </>
  );
}

export default App;
