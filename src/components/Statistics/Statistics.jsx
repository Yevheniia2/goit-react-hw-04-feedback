import { Text } from "./Statistics.styled";
import { Notification } from "components/Notification/Notification";

export const Statistics = (props) => {
    return (
        <>
            {props.total === 0 && <Notification message="There is no feedback" />}
            {props.total !== 0 && (
                <>
                    <Text>Good:{ props.good }</Text>
                    <Text>Neutral:{ props.neutral }</Text>
                    <Text>Bad:{ props.bad}</Text>
                    <Text>Total:{ props.total}</Text>
                    <Text>Positive feedback:{ props.positivePercentage }%</Text>
                </>
            )}
        </>
    );
};