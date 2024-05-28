export const NAME_SELECT = {
  COUNTRY: "country",
  CITY: "city",
  DISCIPLINES: "disciplines",
  ACOOMMODATION: "accommodation",
};

type CountryKeys = "РФ" | "РБ";

export const displines = [];
export const objectOfCitiesValue: Record<CountryKeys, string[]> = {
  РФ: ["Москва", "Сочи"],
  РБ: ["Минск", "Гомель"],
};
export const objectOfAcoommodationValue: Record<CountryKeys, string[]> = {
  РФ: ["Общежития", "Аренда", "Не интересует", "Общежития + Аренда"],
  РБ: ["Общежития", "Не интересует"],
};

interface SelectionFormI {
  country: string[];
  selectCountry: null | string;

  city: string[];
  selectCity: null | string;

  displines: string[];
  selectDisplines: null | string;

  acoommodation: string[];
  selectAcoommodation: null | string;

  setSelectCountry: (country: string | null) => void;
  setSelectCity: (city: string | null) => void;
  setSelectDisplines: (discipline: string | null) => void;
  setSelectAcoommodation: (acoommodation: string | null) => void;

  setCity: (country: null | string) => void;
  setAcoommodation: (country: null | string) => void;

  checkCompleted: () => boolean;
}

export const selectionForm: SelectionFormI = {
  country: ["РФ", "РБ"],
  selectCountry: null,

  city: [],
  selectCity: null,

  displines: ["Технический", "Гуманитарный"],
  selectDisplines: null,

  acoommodation: [],
  selectAcoommodation: null,

  setSelectCountry(country: string | null) {
    this.selectCountry = country;
    this.setCity(country);
    this.setSelectCity(null);
    this.setAcoommodation(null);
    this.setSelectAcoommodation(null);
  },

  setSelectCity(city: string | null) {
    this.selectCity = city;
    this.setSelectAcoommodation(null);
    city === null
      ? this.setAcoommodation(null)
      : this.setAcoommodation(this.selectCountry);
  },

  setSelectDisplines(discipline: string | null) {
    this.selectDisplines = discipline;
  },

  setSelectAcoommodation(acoommodation: string | null) {
    this.selectAcoommodation = acoommodation;
  },
  setCity(country: null | string) {
    if (country === null) {
      this.city = [];
      return;
    }

    if (Object.prototype.hasOwnProperty.call(objectOfCitiesValue, country)) {
      this.city = objectOfCitiesValue[country as CountryKeys];
    } else {
      this.city = [];
    }
  },

  setAcoommodation(country: null | string) {
    if (country === null) {
      this.acoommodation = [];
      return;
    }

    if (
      Object.prototype.hasOwnProperty.call(objectOfAcoommodationValue, country)
    ) {
      this.acoommodation = objectOfAcoommodationValue[country as CountryKeys];
    } else {
      this.acoommodation = [];
    }
  },

  checkCompleted() {
    if (
      this.selectCountry &&
      this.selectCity &&
      this.selectDisplines &&
      this.selectDisplines
    ) {
      return true;
    } else {
      return false;
    }
  },
};
