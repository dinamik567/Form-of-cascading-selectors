import styles from "./styles.module.css";
import { SelectForm } from "../select-form";
import { useReducer, useState } from "react";
import { getArrayOfSelectValueObject } from "./utils";
import { selectionReducer } from "../../reducer";
import {
  ACTION_TYPE,
  NAME_SELECT,
  initialStateSelectedId,
  arrayDisciplinesOfSelectValueObject,
} from "../../settings";

export function MultiSelectFrom() {
  const [disciplines, setDisciplines] = useState(0);
  const [selectedId, dispatch] = useReducer(
    selectionReducer,
    initialStateSelectedId
  );

  const isActive =
    selectedId.countryId !== 0 &&
    selectedId.cityId !== 0 &&
    selectedId.habitationId !== 0 &&
    disciplines !== 0;

  const indexRootElement = 1;
  const arrayCountryOfSelectValueObject =
    getArrayOfSelectValueObject(indexRootElement);
  const arrayCityOfSelectValueObject = getArrayOfSelectValueObject(
    selectedId.countryId
  );
  const arrayHabitationOfSelectValueObject = getArrayOfSelectValueObject(
    selectedId.cityId
  );

  function handleChangeDisciplinesSelected(id: number) {
    setDisciplines(id);
  }

  function handleChangeCounrySelectedId(id: number) {
    dispatch({ type: ACTION_TYPE.CHOOSE_COUNTRY, id });
  }

  function handleChangeCitySelectedId(id: number) {
    dispatch({ type: ACTION_TYPE.CHOOSE_CITY, id });
  }

  function handleChangeHabitationSelectedId(id: number) {
    dispatch({ type: ACTION_TYPE.CHOOSE_HABITATION, id });
  }

  return (
    <form className={styles.form}>
      <SelectForm
        textInput="Выберете страну"
        nameSelect={NAME_SELECT.COUNTRY}
        arrayOfSelectValueObject={arrayCountryOfSelectValueObject}
        onChageSelectedId={handleChangeCounrySelectedId}
      />
      <SelectForm
        textInput="Выберете город"
        nameSelect={NAME_SELECT.CITY}
        arrayOfSelectValueObject={arrayCityOfSelectValueObject}
        onChageSelectedId={handleChangeCitySelectedId}
      />

      <SelectForm
        textInput="Вид Вуза"
        nameSelect={NAME_SELECT.DISCIPLINES}
        arrayOfSelectValueObject={arrayDisciplinesOfSelectValueObject}
        onChageSelectedId={handleChangeDisciplinesSelected}
      />

      <SelectForm
        textInput="Выберете вариант проживания"
        nameSelect={NAME_SELECT.ACOOMMODATION}
        arrayOfSelectValueObject={arrayHabitationOfSelectValueObject}
        onChageSelectedId={handleChangeHabitationSelectedId}
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
