import styles from "./syles.module.css";

interface SelectFormProps {
  nameSelect: string;
  textLabel: string;
  arrayAvailableOfSelectValue: string[];
  selectedValue: string;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectForm({
  nameSelect,
  textLabel,
  arrayAvailableOfSelectValue,
  onChangeSelect,
  selectedValue,
}: SelectFormProps) {
  return (
    <label className={styles.label}>
      <span className={styles.textLabel}>{textLabel}</span>
      <select
        className={styles.select}
        onChange={(e) => onChangeSelect(e)}
        name={nameSelect}
        value={selectedValue}
      >
        <option value={""}>Выбрать</option>
        {arrayAvailableOfSelectValue.map((value, ind) => {
          return (
            <option key={ind} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
}
