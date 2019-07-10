import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      
        <Nav />
        <Wrapper>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} />
        </Switch>
        </Wrapper>
      
    </Router>
  );
}


export default App;


// function App() {
//   return (
//     <div className="App">
//      <Nav />
//      <Wrapper>
//      <Input />
//      {/* <Books /> */}
//      <FormBtn>Submit Book
//      </FormBtn>
//      </Wrapper>
//     </div>
//   );
// }