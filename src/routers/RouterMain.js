import { Route, Routes } from 'react-router-dom';
import Login from '../views/login/Login';
import RouterPrivate from './RouterPrivate';
import RouterHomeIn from './in/RouterHomeIn';
import { isactive } from '../hooks/utilities';

const RouterMain = () => {

  return (
    <Routes>
        <Route path='/auth/*' 
        element={
            <RouterPrivate>
                <RouterHomeIn />
            </RouterPrivate>
        } />
        <Route path='/inicio' element={<Login />} />
        <Route path='/*' element={<Login />} />
    </Routes>
  )
}

export default RouterMain