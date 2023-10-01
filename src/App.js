import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DoctorList from './components/DoctorList';
import DoctorDetail from './components/DoctorDetail';
import AppointmentBooking from './components/AppointmentBooking';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DoctorList} />
        <Route path="/doctors/:id" component={DoctorDetail} />
        <Route path="/book-appointment" component={AppointmentBooking} />
      </Switch>
    </Router>
  );
}

export default App;
