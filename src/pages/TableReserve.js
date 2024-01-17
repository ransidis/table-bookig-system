import { useState } from 'react';
import './TableReserve.css';

function TableReserve() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  //Change availability here
  const [availableTimes, setAvailableTimes] = useState(["18:00", "19:00", "20:00", "21:00", "22:00"]);
  const [availableOccasions, setAvailableOccasions] = useState(["Birthday", "Anniversary", "Other"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate('')
    setGuests('')
    setTime('')
    setOccasion('')
    alert('Submitted');
  }

  return (
    <>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>{availableTime}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        {availableOccasions.map((availableoccasion)=>(
            <option key={availableoccasion} value={availableoccasion}>{availableoccasion}</option>
        ))}
        </select>

        <input type="submit" value="Make Your reservation" disabled={!date || !time || !guests || !occasion} />
      </form>
    </>
  );
}

export default TableReserve;
