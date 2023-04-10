import { BrowserRouter } from 'react-router-dom';
import RouterMain from './routers/RouterMain';
import AuthState from './context/authState';

function App() {
  return (
   <BrowserRouter>
      <AuthState>
        <RouterMain />
      </AuthState>
   </BrowserRouter>
  );
}

export default App;
