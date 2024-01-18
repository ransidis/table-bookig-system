import React, { useState, useEffect } from 'react';
import { fetchAPI } from './MockApi';

function TableReserveForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [name, setName] = useState("")
  const [phone,setPhone] = useState("")

  useEffect(() => {
    fetchAvailableTimes(new Date().toISOString().split('T')[0]);
  }, []);

  const fetchAvailableTimes = (selectedDate) => {
    fetchAPI(selectedDate)
      .then((times) => {
        setAvailableTimes(times);
      })
      .catch((error) => {
        console.error('Error fetching available times:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('')
    setGuests('')
    setOccasion('')
    setPhone('')
    setDate(new Date())

    document.getElementById('output').innerHTML = `Reservation Successfull! <br/> You have reserved tables for ${guests} guest(s) on ${date} at ${time}`;
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    fetchAvailableTimes(newDate);
  };



  return (
    <>
      <form  onSubmit={handleSubmit} style={{textAlign:'center'}}>
      <fieldset>
        <p>*Please fill all the fields to submit</p>
        <label htmlFor="res-name">Your Name</label><br/>
        <input required type="text" id="res-name" placeholder='Ex: Ransi Dissanayake' value={name} onChange={(e)=>setName(e.target.value)} /><br/>

        <label htmlFor="res-phone">Your Phone Number</label><br/>
        <input required type="text" id="res-phone" placeholder='07xxxxxxxx' pattern='07[0-9]{8}' value={phone} onChange={(e)=>setPhone(e.target.value) } /><br/>
      </fieldset>
      <fieldset>
        <label htmlFor="res-date">Choose date</label><br/>
        <input required type="date" id="res-date" value={date} onChange={handleDateChange} /><br/>

        <label htmlFor="res-time">Choose time</label><br/>
        <select required id="res-time" value={time} disabled={!date} onChange={(e) => setTime(e.target.value)}><br/>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} >{availableTime}</option>
          ))}
        </select><br/>

        <label htmlFor="guests">Number of guests</label><br/>
        <input required type="number" placeholder="between 1 - 20" min="1" max="20" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} /><br/>

        <label htmlFor="occasion">Occasion</label><br/>
        <select required id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}><br/>
          {props.availableoccasions.map((availableoccasion) => (
            <option key={availableoccasion}>{availableoccasion}</option>
          ))}
        </select>
        <br/><input type="submit" value="Make Your reservation" disabled={!date || !time || !guests || !occasion} />
        <div id="output">

        </div>
        </fieldset>
      </form>
    </>
  );
}

export default TableReserveForm;
