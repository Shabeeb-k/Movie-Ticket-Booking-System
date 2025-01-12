"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSeat,
  deselectSeat,
  updateTotalCost,
} from "../redux/actions/seatActions";

const seatLayout = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
];

const priceMap = {
  silver: 100,
  gold: 150,
  platinum: 200,
};

const SeatBookingApp = () => {
  const dispatch = useDispatch();
  const { selectedSeats, totalCost } = useSelector((state) => state.seat);

  const handleSelectSeat = (seat, rowIndex) => {
    if (selectedSeats.length >= 8 && !selectedSeats.includes(seat)) {
      alert("You can only select up to 8 seats.");
      return;
    }

    if (selectedSeats.includes(seat)) {
      dispatch(deselectSeat(seat));
    } else {
      dispatch(selectSeat(seat));
    }
  };

  useEffect(() => {
    dispatch(updateTotalCost());
  }, [selectedSeats, dispatch]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Movie Seat Booking</h1>
      <div className="grid grid-rows-6 grid-cols-10 gap-4 mb-4">
        {seatLayout.map((row, rowIndex) =>
          row.map((seat) => {
            const isSelected = selectedSeats.includes(seat);
            const seatPrice =
              rowIndex < 2
                ? priceMap.silver
                : rowIndex < 4
                ? priceMap.gold
                : priceMap.platinum;

            return (
              <div
                key={seat}
                className={`p-4 border cursor-pointer ${
                  isSelected ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleSelectSeat(seat, rowIndex)}
              >
                {seat} (₹{seatPrice})
              </div>
            );
          })
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-xl">Selected Seats</h2>
        <ul className="list-disc ml-6">
          {selectedSeats.map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
        <p className="mt-4 font-bold">Total: ₹{totalCost}</p>
      </div>

      <button
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => alert("Booking Confirmed!")}
      >
        Book Now
      </button>
    </div>
  );
};

export default SeatBookingApp;
