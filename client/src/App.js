import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import Genre from './Components/Genre/Genre';
import Myinfo from './Components/Info/Myinfo';
import SearchProducts from './Components/Search/SearchProducts';
import { Box } from '@material-ui/core'
import Selling from './Components/Info/Selling';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
           <Switch>
              <Route exact path= '/' component={Home} />
              <Route exact path= '/cart' component={Cart} />
              {/* <Route exact path= '/product/:id' component={Product} /> */}
              <Route exact path= '/product/:id' component={DetailView} />
              <Route exact path= '/genre/:genre' component={Genre} />
              <Route exact path= '/search/:keyword' component={SearchProducts} />
              <Route path= '/myinfo' component={Myinfo} />
              <Route component={NotFound} />
              </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
