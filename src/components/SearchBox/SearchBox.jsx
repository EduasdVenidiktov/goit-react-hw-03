import css from "./SearchBox.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.inputArea}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
