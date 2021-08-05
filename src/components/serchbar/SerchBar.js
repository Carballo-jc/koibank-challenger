import React,{ useState} from 'react'
import { useDispatch } from 'react-redux';
import styles from "./styles.module.css";
import { getFilterType } from '../../actions';



const SerchBar = () => {
  
  const [inputValue, setInputValue] = useState("");
const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getFilterType(inputValue))
  };
    return (
        <div>
      <form onSubmit={handleSearch}>
        <input
          className={styles.input}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Buscar..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.btn_search}>
          Buscar
        </button>
      </form>
     
    </div>
    )
}

export default SerchBar
