import React, { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom'
import { Box, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getKeywordProducts as gKW } from '../../redux/actions/productActions';

const useStyle = makeStyles(theme => ({
  search: {
      borderRadius: 2,
      marginLeft: 10,
      width: '38%',
      backgroundColor: '#fff',
      display: 'flex'
    },
    searchIcon: {
      marginLeft: 'auto',
      padding: 5,
      display: 'flex',
      color: 'blue'
    },
    inputRoot: {
      fontSize: 'unset',
      width: '100%'
    },
    inputInput: {
      paddingLeft: 20,
      width: '100%',
  },
  list: {
    position: 'absolute',
    color: '#000',
    background: '#FFFFFF',
    marginTop: 36
  }
}))

const Search = () => {

  const classes = useStyle();

  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(()=>{
      async function fetchData() {
        //  if (keyword.length < 3) {
            ////  setProducts([]);
        //  } 
        //else {
              const { data } = await axios.get(`http://localhost:8000/search/${keyword}`);
              console.log("hahahahahhahaahahahhahaha");
              console.log(data);
              setProducts(data.slice(0,5))
          //}
      }
  
      let timeoutId = setTimeout(() => {
          if (keyword) {
              fetchData();
          }
          console.log("hahahahahhahaahahahhahaha");
      }, 300);

      return () => {
         // if (keyword.length < 3) {
           //   setProducts([]);
          //}
          clearTimeout(timeoutId);
      }
  
  },[keyword]);


    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${keyword}`);
        setKeyword('');
    };

    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
          <input
              placeholder = 'Search for something...'
            
              inputProps={{ 'aria-label': 'search' }}
              value={keyword}
              onChange={(e) => {
              setKeyword(e.target.value);
          }}
          />
          <div>
              <SearchIcon />
            </div>
          </form>
        </div>
      </>
    )
}

export default Search;