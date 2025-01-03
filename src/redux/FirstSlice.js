import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    mainMoney: 100000000000,
    ship: {
      money: 60000,
      title: "Lüks Tekne",
      adet: 0,
    },
    jet: {
      money: 70000,
      title: "Özel Uçak",
      adet: 0,
    },
    car: {
      money: 90000,
      title: "Araba",
      adet: 0,
    },
    phone: {
      money: 90000,
      title: "Avm",
      adet: 0,
    },
    basket: [],
    total: 0,
  },
  reducers: {
    addButton: (state, action) => {
      const { product } = action.payload;

      if (state[product]) {
        state[product].adet += 1;
        // Sepete ürünün tüm bilgilerini ekliyoruz
        state.basket.push({
          title: state[product].title,
          adet: state[product].adet,
          money: state[product].money,
        });
        state.total += state[product].money;
        state.mainMoney -= state[product].money;
      }
    },
    removeButton: (state, action) => {
      const { product } = action.payload;

      if (state[product]) {
        if (state[product].adet > 0) {
          state[product].adet -= 1;
          // Sepetten son ürünü çıkarıyoruz
          const index = state.basket.findIndex((item) => item.title === state[product].title);
          if (index > -1) {
            state.basket.splice(index, 1); // Ürünü sepetten çıkar
          }
          state.total -= state[product].money;
          state.mainMoney += state[product].money;
        }
      }
    },
  },
});

export default moneySlice.reducer;
export const { addButton, removeButton } = moneySlice.actions;
