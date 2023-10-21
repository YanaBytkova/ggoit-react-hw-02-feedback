import css from './FeedbackOptions.module.css';

  export const FeedbackOptions = ({ countTotalFeedback, label }) => (
  
      <button className={css.button} type="button" onClick={ countTotalFeedback } >
       {label}
      </button>
  

  );
