import React, { useState, useEffect } from 'react';
import { fetchAPI } from './MockApi';

function TableReserveForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

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

  const handleSubmit = () => {
    // Handle form submission
    alert('Reservation Successful!');
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    fetchAvailableTimes(newDate);
  };

  function infoMessage(){
    alert('Booking system fetches data from a local API, please select a date for reservation between 2024 Jan 1 to 2024 Jan 30. Thanks')
  }

  return (
    <>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          {props.availableoccasions.map((availableoccasion) => (
            <option key={availableoccasion}>{availableoccasion}</option>
          ))}
        </select>
        <input type="submit" value="Make Your reservation" disabled={!date || !time || !guests || !occasion} />
      </form>
      <input type="button" onClick={infoMessage} value="How this works"/>
    </>
  );
}

export default TableReserveForm;
