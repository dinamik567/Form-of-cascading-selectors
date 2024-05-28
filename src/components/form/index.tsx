import styles from "./styles.module.css";
import { useState } from "react";
import { SelectForm } from "../select-form";
import { selectionForm } from "../../settings";
import { NAME_SELECT } from "../../settings";

const { COUNTRY, CITY, DISCIPLINES, ACOOMMODATION } = NAME_SELECT;
export function MultiSelectFrom() {
  const [isActive, setIsActive] = useState(false);
  const [selectedValues, setSelectedValues] = useState({
    COUNTRY: "",
    CITY: "",
    DISCIPLINES: "",
    ACOOMMODATION: "",
  });

  function handleChangeSelectedCountry(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const country = e.currentTarget.value;
    country === ""
      ? selectionForm.setSelectCountry(null)
      : selectionForm.setSelectCountry(country);
    setSelectedValues({
      ...selectedValues,
      CITY: "",
      ACOOMMODATION: "",
      COUNTRY: country,
    });
    setIsActive(selectionForm.checkCompleted());
  }

  function handleChangeSelectedCity(e: React.ChangeEvent<HTMLSelectElement>) {
    const city = e.currentTarget.value;
    city === ""
      ? selectionForm.setSelectCity(null)
      : selectionForm.setSelectCity(city);
    setSelectedValues({
      ...selectedValues,
      ACOOMMODATION: "",
      CITY: city,
    });
    setIsActive(selectionForm.checkCompleted());
  }

  function handleChangeSelectedDisplines(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const city = e.currentTarget.value;
    city === ""
      ? selectionForm.setSelectDisplines(null)
      : selectionForm.setSelectDisplines(city);
    setSelectedValues({ ...selectedValues, DISCIPLINES: city });
    setIsActive(selectionForm.checkCompleted());
  }

  function handleChangeSelectedAcoommodation(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const accommodation = e.currentTarget.value;
    accommodation === ""
      ? selectionForm.setSelectAcoommodation(null)
      : selectionForm.setSelectAcoommodation(accommodation);
    setSelectedValues({ ...selectedValues, ACOOMMODATION: accommodation });
    setIsActive(selectionForm.checkCompleted());
  }

  return (
    <form className={styles.form}>
      <SelectForm
        textLabel="Выберете страну"
        nameSelect={COUNTRY}
        arrayAvailableOfSelectValue={selectionForm.country}
        onChangeSelect={handleChangeSelectedCountry}
        selectedValue={selectedValues.COUNTRY}
      />
      <SelectForm
        textLabel="Выберете город"
        nameSelect={CITY}
        arrayAvailableOfSelectValue={selectionForm.city}
        onChangeSelect={handleChangeSelectedCity}
        selectedValue={selectedValues.CITY}
      />
      <SelectForm
        textLabel="Вид Вуза"
        nameSelect={DISCIPLINES}
        arrayAvailableOfSelectValue={selectionForm.displines}
        onChangeSelect={handleChangeSelectedDisplines}
        selectedValue={selectedValues.DISCIPLINES}
      />
      <SelectForm
        textLabel="Выберете вариант проживания"
        nameSelect={ACOOMMODATION}
        arrayAvailableOfSelectValue={selectionForm.acoommodation}
        onChangeSelect={handleChangeSelectedAcoommodation}
        selectedValue={selectedValues.ACOOMMODATION}
      />
      <input
        className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}
        type="submit"
        value={"Отправить"}
        disabled={!isActive}
      />
    </form>
  );
}
