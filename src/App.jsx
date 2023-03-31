
import './App.css';

function App() {
 const array = ["Tunis","Djerba","Monastir","Hamamet"]
   return (
    <div className="App">
   <ul> 
    {array.filter(a => a.includes("u")).map((item,id) => <div key={id}>
      <li>{item}</li> 
      <br />
      </div>)}
   </ul>
    
    </div>
  );
}

export default App;
