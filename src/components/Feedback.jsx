import css from "./Feedback.module.css";

const Feedback = ({ feedbackTypes, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedbackList}>
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
