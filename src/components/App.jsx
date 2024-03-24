import { useState } from "react";
import Feedback from "./Feedback";
import Options from "./Options";
import css from "./App.module.css";

function App() {
  // Стан для зберігання типів відгуків
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення стану відгуку
  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevTypes) => ({
      ...prevTypes,
      [feedbackType.toLowerCase()]: prevTypes[feedbackType.toLowerCase()] + 1,
    }));
  };

  // Функція для скидання зібраних відгуків
  const resetFeedback = () =>
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  const options = ["Good", "Neutral", "Bad", "Reset"];

  // Обчислення загальної кількості відгуків
  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedback = Math.round(
    (feedbackTypes.good / totalFeedback) * 100
  );

  return (
    <div>
      <h1 className={css.title}> Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      {/* Передача опцій, функції оновлення стану та функції скидання відгуків */}
      <Options
        options={options}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {/* якщо натиснута хоч одна кнопка, то з'являються feedbackTypes, інакше
      повідомлення */}
      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <p className={css.feedbackText}>
          No feedback yet. Please leave your feedback!
        </p>
      )}
    </div>
  );
}

export default App;
