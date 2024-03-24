import css from "./Options.module.css";

const Options = ({ options, updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <ul className={css.listOptions}>
        {options.map((option, index) => (
          <li key={index}>
            {option !== "Reset" ? (
              <button onClick={() => updateFeedback(option)}>{option}</button>
            ) : (
              totalFeedback > 0 && (
                <button onClick={resetFeedback}>Reset</button>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
