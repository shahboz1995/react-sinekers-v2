import { createStore } from "redux";

import sneakersReducer from "./sneakersReducer";

export const store = createStore(sneakersReducer);
console.log(store.getState());