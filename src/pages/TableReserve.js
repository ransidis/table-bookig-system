import React, { useState } from "react";
import TableReserveForm from "./TableReserveForm";

function TableReserve() {
  const [availableoccasions, setAvailableOccasions] = useState(["--Select One--", "Birthday", "Anniversary", "Other"]);

  return (
    <>
      <TableReserveForm availableoccasions={availableoccasions} />
    </>
  );
}

export default TableReserve;
