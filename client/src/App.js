import Home from "./components/Home/Home"
import SelectedRestaurant from "./components/SelectedRestoraunt/SelectedRestaurant"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';


const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/"  exact  caseSensitive={false} element={<Home />} />
        <Route path={props.path} caseSensitive={false} element={<SelectedRestaurant />} />
      </Routes>
    </Router>)
}

const mapStateToProps = (state) => ({
  path: state.path
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


