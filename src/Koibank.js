import './App.css';
//redux
import { Provider } from "react-redux";
import store from "./store";
import SerchBar from './components/serchbar/SerchBar';
import TableInfo from './components/table/TableInfo';
function Koibank() {
  return (
    <div className="App">
      <Provider store={store}>
      <SerchBar />
      <TableInfo />
      </Provider>
    </div>
  );
}

export default Koibank;
