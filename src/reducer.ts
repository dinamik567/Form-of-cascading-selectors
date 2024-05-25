import { ACTION_TYPE } from "./settings";
import { InitialStateSelectedIdI, ActionSelectionReducerI } from "./types";

export function selectionReducer(
  state: InitialStateSelectedIdI,
  action: ActionSelectionReducerI
) {
  switch (action.type) {
    case ACTION_TYPE.CHOOSE_COUNTRY:
      return {
        countryId: action.id,
        cityId: 0,
        habitationId: 0,
      };
    case ACTION_TYPE.CHOOSE_CITY:
      return { ...state, cityId: action.id, habitationId: 0 };
    case ACTION_TYPE.CHOOSE_HABITATION:
      return { ...state, habitationId: action.id };
    default:
      console.error("Неизветсная ошибка редьюсер");
      return state;
  }
}
