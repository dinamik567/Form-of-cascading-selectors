import { SelectValuesObjectI, InitialStateSelectedIdI } from "./types";

export const ACTION_TYPE = {
  CHOOSE_COUNTRY: "choose_country",
  CHOOSE_CITY: "choose_city",
  CHOOSE_HABITATION: "choose_habitation",
} as const;

export const initialStateSelectedId: InitialStateSelectedIdI = {
  countryId: 0,
  cityId: 0,
  habitationId: 0,
};

export const NAME_SELECT = {
  COUNTRY: "country",
  CITY: "city",
  DISCIPLINES: "disciplines",
  ACOOMMODATION: "accommodation",
};

export const arrayDisciplinesOfSelectValueObject = [
  { id: 1, title: "Технический" },
  { id: 2, title: "Гуманитарный" },
];

export const initialValueForForm: SelectValuesObjectI = {
  1: {
    id: 1,
    title: "(Root)",
    childIds: [2, 3],
  },
  2: {
    id: 2,
    title: "РФ",
    childIds: [4, 5],
  },
  3: {
    id: 3,
    title: "РБ",
    childIds: [6, 7],
  },
  4: {
    id: 4,
    title: "Москва",
    childIds: [8, 9, 10, 11],
  },
  5: {
    id: 5,
    title: "Сочи",
    childIds: [8, 9, 10, 11],
  },
  6: {
    id: 6,
    title: "Минск",
    childIds: [8, 10],
  },
  7: {
    id: 7,
    title: "Гомель",
    childIds: [8, 10],
  },
  8: {
    id: 8,
    title: "Общежитие",
    childIds: [],
  },
  9: {
    id: 9,
    title: "Аренда",
    childIds: [],
  },
  10: {
    id: 10,
    title: "Не интересует",
    childIds: [],
  },
  11: {
    id: 11,
    title: "Общежития + Аренда",
    childIds: [],
  },
};
