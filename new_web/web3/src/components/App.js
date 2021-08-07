import './App.css';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';

const App= () =>{
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
        <ItemList/>
        </div>
        <div className="column eight wide">
          <ItemDetail/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
