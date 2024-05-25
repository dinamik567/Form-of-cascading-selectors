import styles from "./syles.module.css";
import { ArrayOfSelectValueObjectI } from "../../types";

interface SelectFormProps {
  nameSelect: string;
  textInput: string;
  arrayOfSelectValueObject:
    | ArrayOfSelectValueObjectI[]
    | { id: number; title: string }[];
  onChageSelectedId: (id: number) => void;
}

export function SelectForm({
  nameSelect,
  textInput,
  arrayOfSelectValueObject,
  onChageSelectedId,
}: SelectFormProps) {
  function handleChangeSelect(e: React.FormEvent<HTMLSelectElement>) {
    const selectedOption = e.currentTarget.selectedOptions[0];
    const selectedId = selectedOption.getAttribute("data-id");

    if (selectedId !== null) {
      onChageSelectedId(+selectedId);
    } else {
      onChageSelectedId(0);
    }
  }

  return (
    <label className={styles.label}>
      <span className={styles.textLabel}>{textInput}</span>
      <select
        className={styles.select}
        onChange={(e) => handleChangeSelect(e)}
        name={nameSelect}
      >
        <option value={""}>Выбрать</option>
        {arrayOfSelectValueObject.map((option) => {
          return (
            <option key={option.id} data-id={option.id} value={option.title}>
              {option.title}
            </option>
          );
        })}
      </select>
    </label>
  );
}
