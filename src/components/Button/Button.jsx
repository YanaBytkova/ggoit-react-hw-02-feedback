import css from './Button.module.css';

  export const Button = ({ countTotalFeedback, countPositiveFeedbackPercentage, label }) => (
    <button className={css.button} type="button" onClick={ countTotalFeedback } >
      {label}
    </button>
  );
