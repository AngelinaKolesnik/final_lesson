import { FactsActionTypes } from "../types/books";

const defaultState = {
text: '',
createdAt: '',
isLoading: false,
};

export const factsReducer = (store = defaultState, action: any) => {
  switch (action.type) {
    case FactsActionTypes.SET_FACTS:
      return {
        ...store,
        text: action.payload[0].text,
      //   createdAt: action.payload[0],
		  isLoading: false,
      };
		case FactsActionTypes.SET_IS_LOADING:
			return {
			  ...store,
			  isLoading: action.payload,
			};
    default:
      return store;
  }
};


