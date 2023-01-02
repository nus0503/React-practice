import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './routes/Detail';
import Home from './routes/Home';
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

/* ----------------------------------about To Do List---------------------------------------- 
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
---------------------------------------END-------------------------------------------------------- */

/* ------------------------------------about coin tracker---------------------------------------
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [coinValue, setCoinValue] = useState(1);
  const onChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const selectOption = (event) => {
    setCoinValue(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
      <strong>Loading...</strong>
      ) : (
      <select onChange={selectOption}>
        {coins.map((coin) => (
        <option value={coin.quotes.USD.price} key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
        ))}
      </select>
      )}
      <input onChange={onChange} value={value} style={{display : "block"}} type="number" />
      <div>살 수 있는 가격은 : {value / coinValue}</div>
    </div>
  );
};
-----------------------------------------------------------END-------------------------------------------------------- */

function App() {
  return (
    <Router>
      <Routes>
        <Route path='movie/:id' element={<Detail />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
