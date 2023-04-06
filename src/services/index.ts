import axios from "axios";
import { setFacts } from "../store/actionCreators/factsActions";
// import {
//   setBooks,
//   setIsLoading,
//   setOneBook,
// } from "../../store/actionCreators/booksActions";

export const getFacts: any = () => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    let isCanceled = false;
    try {
      const response = await axios.get(`https://cat-fact.herokuapp.com/facts`);
      dispatch(setFacts(response.data));
		console.log(response.data[0].text)
    } catch (error) {
      // isCanceled = error.__CANCEL__;
    } finally {
      if (!isCanceled) {
      //   setIsLoading(false);
      }
    }
  };
};
