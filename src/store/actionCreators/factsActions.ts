import { FactsActionTypes } from "../types/books";

export const setFacts = (fact: string) => ({
  type: FactsActionTypes.SET_FACTS,
  payload: fact,
});
export const setIsLoading = (isLoading: boolean) => ({
	type: FactsActionTypes.SET_IS_LOADING,
	payload: isLoading,
 });
