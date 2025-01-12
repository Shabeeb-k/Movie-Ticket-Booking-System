const initialState = {
    selectedSeats: [],
    totalCost: 0,     
  };
  
  const seatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_SEAT':
        return {
          ...state,
          selectedSeats: [...state.selectedSeats, action.payload],
        };
      case 'DESELECT_SEAT':
        return {
          ...state,
          selectedSeats: state.selectedSeats.filter(
            (seat) => seat !== action.payload
          ),
        };
      case 'UPDATE_TOTAL_COST':
        const total = state.selectedSeats.reduce((sum, seat) => {
          const rowIndex = seat.charCodeAt(0) - 'A'.charCodeAt(0); 
          const seatPrice = rowIndex < 2 ? 100 : rowIndex < 4 ? 150 : 200; 
          return sum + seatPrice;
        }, 0);
  
        return {
          ...state,
          totalCost: total,
        };
      default:
        return state;
    }
  };
  
  export default seatReducer;
  