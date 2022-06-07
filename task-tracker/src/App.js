import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './components/Button';
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Header />
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
