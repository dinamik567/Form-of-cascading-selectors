export interface SelectValuesObjectI {
  [key: number]: ArrayOfSelectValueObjectI;
}

export interface ArrayOfSelectValueObjectI {
  id: number;
  title: string;
  childIds: number[];
}

export interface InitialStateSelectedIdI {
  countryId: number;
  cityId: number;
  habitationId: number;
}

export interface ActionSelectionReducerI {
  type: "choose_country" | "choose_city" | "choose_habitation";
  id: number;
}
