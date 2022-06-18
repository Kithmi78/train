import { useEffect, useState} from "react";
import {db} from '../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";



function DevelopersComponent() {

  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [departure, setDeparture] = useState('');
  const [to, setTo] = useState('');
  const [arrival, setArrival] = useState('');
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
      getSchedule();
  }, []);

  const addSchedule = async () => {
      const docRef = await addDoc(collection(db, "schedule"), {
          name: name,
          from: from,
          departure: departure,
          to: to,
          arrival: arrival
      }).then(() => {
          alert("Schedule Successfully Added !");
          clearTexts();
      }).catch(() => {
          alert("Schedule Adding Failed !")
      });
  }

  const deleteSchedule = async () => {
      await deleteDoc(doc(db, "schedule", "beEP0kL2ltZ7KLY8o0Jo")) // last point - object id
          .then(() => {
              alert("Schedule Deleted !")
          }).catch(() => {
              alert("Delete Failed !")
          });
  }

  const getSchedule = async () => {
      const querySnapshot = await getDocs(collection(db, "schedule"));
      setSchedule(querySnapshot.docs.map((doc) => ({
          ...doc.data()
      })));
  }

  const clearTexts = () => {
      setName('');
      setFrom('');
      setDeparture('');
      setTo('');
      setArrival('');
  }

  return (
      
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label"> Train Name </label>
                          <input type="email" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="Podi Manike" />
                      </div>
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">From</label>
                          <input type="email" value={from} onChange={(e) => { setFrom(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="Colombo Fort" />
                      </div>
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Departure</label>
                          <input type="email" value={departure} onChange={(e) => { setDeparture(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="June 17, 2022 at 4:45:27 PM" />
                      </div>
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">To</label>
                          <input type="email" value={to} onChange={(e) => { setTo(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="Badulla" />
                      </div>
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Arrival</label>
                          <input type="email" value={arrival} onChange={(e) => { setArrival(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="June 17, 2022 at 6:45:27 PM" />
                      </div>
                      <button type="button" class="btn btn-primary" onClick={addSchedule}>Save Schedule</button>
                      <button type="button" class="btn btn-danger" style={{ marginLeft: 10 }} onClick={deleteSchedule}>Delete Schedule</button>
                  </div>
                  <div className="col">
                      <table class="table">
                          <thead>
                              <tr>
                                  <th scope="col">Train Name</th>
                                  <th scope="col">From</th>
                                  <th scope="col">Departure</th>
                                  <th scope="col">To</th>
                                  <th scope="col">Arrival</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  schedule.map(schedule => {
                                      return (
                                          <tr>
                                              <td>{schedule.name}</td>
                                              <td>{schedule.from}</td>
                                              <td>{schedule.arrival}</td>
                                              <td>{schedule.to}</td>
                                              <td>{schedule.arrival}</td>
                                          </tr>
                                      )
                                  })
                              }
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
     
  );
}



export default DevelopersComponent;
