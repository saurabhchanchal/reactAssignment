
import './App.css';

let linksList = ["Services","project","About"] 
function App() {
  return (
    <div className="App">
      <Logo />

      <div className='links'>
      {linksList.map(function(el) {
        return <Links link={el}/>
      })}
      </div>

      <Button />

    </div>
  );
}

// components
function Logo() {
  return <div><img className='image' src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg" alt="logo" /></div>
}

function Links({link}) {
 return (<div>
    <a>{link}</a>
 </div>)
}

function Button() {
  return <div><button>Click</button></div>
}

export default App;
