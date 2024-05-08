import logo from './logo.svg';
import './App.css';

import {Router, Routes, Route } from "react-router-dom";
import Task1 from './components/Task1/Task1';
import CurrentDate from './components/Task2/CurrentDate';
import CurrentTime from './components/Task2/CurrentTime';
import MyName from './components/Task2/MyName';

import HelloWorld from './components/Task3/HelloWorld';
import Counter from './components/Task3/Counter';


function App() {

  const messages = ['React', 'Re: React', 'Re:Re: React'];

  return (
    <Routes>
        <Route index element={<Task1 />} />    
        <Route path="/task2" element={<><MyName /><CurrentDate /><CurrentTime /></> } />    
        <Route path="/task3" element={<><HelloWorld /><Counter /></> } />    

    </Routes>
  );
}

export default App;
