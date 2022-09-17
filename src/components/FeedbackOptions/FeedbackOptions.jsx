import { Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    return options.map(option => (
        <Button key={option} onClick={onLeaveFeedback} name={option}>
            {option}
        </Button>
    ));
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
};