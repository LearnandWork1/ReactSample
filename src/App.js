import logo from './logo.svg';
import './App.css';
import Teacher from './components/Teacher';
import Employee from './components/Employee';
import DataBinding from './components/DataBinding';
import EventBinding from './components/EventBinding';
import UseState from './components/UseState';
import UseStateObj from './components/UseStateObj';
import UsestateArray from './components/UsestateArray';
import ConditionRender from './components/ConditionRender';
import MapOperator from './components/MapOperator';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, Routes } from 'react-router-dom'
import GetAPI from './components/GetAPI';
import SchoolLSData from './components/SchoolLSData';

function App() {
  return (

    <div className='row'>
      <h4>Welcome to React</h4>
      
      <table><tr><td> <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/data-binding">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/data-binding">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/GetAPI">GetAPI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/event-binding">event-binding</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/SchoolLSData">SchoolLSData</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/usestate">usestate</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/conditionrender">conditionrender</a>
                  {/* <a class="dropdown-item" href="/SchoolLSData">SchoolLSData</a> */}
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-item" href="/MapOperator">Map</a>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<DataBinding></DataBinding>}> </Route>
          <Route path='/data-binding' element={<DataBinding></DataBinding>}> </Route>
          <Route path='/event-binding' element={<EventBinding></EventBinding>}></Route>
          <Route path='/usestate' element={<UseStateObj></UseStateObj>}></Route>
          <Route path='/conditionrender' element={<ConditionRender></ConditionRender>}></Route>
          <Route path='/MapOperator' element={<MapOperator></MapOperator>}></Route>
          <Route path='/GetAPI' element={<GetAPI></GetAPI>}></Route>
          <Route path='/SchoolLSData' element={<SchoolLSData></SchoolLSData>}></Route>

        </Routes>
      </BrowserRouter></td>
      
      <td> <GetAPI></GetAPI></td></tr></table>
     




    </div>
  );
}

export default App;
