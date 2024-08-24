/* eslint-disable react/prop-types */
import { formatDistanceToNow, parseISO } from "date-fns";

export default function TimeAgo({ timestamp }) {
    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp);
        const timeperiod = formatDistanceToNow(date);
        timeAgo = `${timeperiod} ago`;
    }

    return (
        <span title="timestamp">
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
