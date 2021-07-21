
import './styles.scss';
import { Navigation } from './components/Navigation'
import { SubHeader } from './styled/MainNav'
import { createContext, useState, useEffect} from 'react'
import { URL } from './constants/constants'

export const DataContext = createContext();

const App = () => {
  
  const [ apiData, setApiData ] = useState({todolist:[], userlist:[]})

  useEffect(() => {
    getData()
  }, []);

  const getData = () => Promise.all([fetch(URL.todos),fetch(URL.users)])
    .then(responses => Promise.all(responses.map(resp => resp.json())) )
    .then(data => {
    setApiData({todolist: data[0], userlist: data[1]});
  });

  return (
    <div className="App"> 
      <DataContext.Provider value={apiData}>
        <h1 data-testid='header'>Basic React App</h1>
        <SubHeader>just messing around with REACT and stuff</SubHeader>
        <Navigation />
      </DataContext.Provider>
    </div>
  );
}

export default App;
