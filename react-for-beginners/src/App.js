import { useState, useEffect } from "react";
/* ------------------- about EFFECT--------------------------------------------
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((current) => current + 1);
//   const onChange = (event) => setKeyword(event.target.value);  
//   useEffect(() => {
//     console.log("I run only once");
//   }, []);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword & counter change");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// };

function Hello() {
  // function byeFn() {
  //   console.log("bye");
  // };
  // function hiFn() {
  //   console.log("create");
  //   return byeFn;
  // };
  // useEffect(hiFn, []);
  // return <h1>Hello</h1>;

  //    ↕
  
  useEffect(() => {
    console.log("created");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((current) => !current);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};
----------------------------------------END---------------------------------------------------- */
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    };
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((element, index) => (<li key={index}>{element}</li>))}
      </ul>
    </div>
  );
};
export default App;
