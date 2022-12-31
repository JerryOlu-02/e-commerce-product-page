export const state = {
  priceOfProduct: 125,
  noOfProducts: 0,
  totalPrice: 0,
};

export const calcTotalPrice = function () {
  return (state.totalPrice = state.noOfProducts * state.priceOfProduct);
};

export const increaseProducts = function () {
  state.noOfProducts++;
  return state.noOfProducts;
};

export const decreaseProducts = function () {
  state.noOfProducts--;
  if (state.noOfProducts < 0) state.noOfProducts = 0;
  return state.noOfProducts;
};
