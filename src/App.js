import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import AllFoods from './pages/AllFoods/AllFoods';
import Order from './Order/Order';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Blogs from './pages/Blogs/Blogs';
import ContactUs from './pages/ContactUS/ContactUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/allrecipes'>
              <AllFoods></AllFoods>
            </Route>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/contactUs'>
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path='/order/:orderId'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
