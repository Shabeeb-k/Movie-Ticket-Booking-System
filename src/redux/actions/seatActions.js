// src/redux/actions/seatActions.js
export const SELECT_SEAT = 'SELECT_SEAT';
export const DESELECT_SEAT = 'DESELECT_SEAT';
export const UPDATE_TOTAL_COST = 'UPDATE_TOTAL_COST';

export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat
  };
};

export const deselectSeat = (seat) => {
  return {
    type: DESELECT_SEAT,
    payload: seat
  };
};

export const updateTotalCost = () => {
  return {
    type: UPDATE_TOTAL_COST
  };
};
