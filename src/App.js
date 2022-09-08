import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/core/Header"
import './assets/styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
      </div>
    </Provider>
  );
}

export default App;
