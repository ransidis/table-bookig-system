import React, { useState } from "react";
import TableReserveForm from "./TableReserveForm";
import './TableReserve.css'

function TableReserve() {
  const [availableoccasions, setAvailableOccasions] = useState(["--Select One--", "Birthday", "Anniversary", "Other"]);

  return (
    <div className="container">
    <div className="title">
      <h1>Reserve a Table</h1>
      <h3>at Little Lemon Restaurant - Chicago</h3>

    </div>
    <div className="fields">
      <TableReserveForm availableoccasions={availableoccasions} />
      <p id="notice">Notice: This Sample Booking system fetches data from a local API, please select a date for reservation between 2024 Jan 1 to 2024 Jan 30 to check it's functionality. Thanks</p>
    </div>
    
    </div>
  );
}

export default TableReserve;
