import { render, fireEvent, screen } from "@testing-library/react";
import TableReserveForm from "./TableReserveForm";

describe('TableReserveForm component', () => {
  test('can be submitted by the user', () => {
    render(<TableReserveForm />);
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '9:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.submit(screen.getByRole('button', { name: /Make Your reservation/i }));

    expect(window.alert).toHaveBeenCalledWith('Submitted');
  });
});
