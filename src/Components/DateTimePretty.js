import DateTime from "./DateTime";
import moment from "moment/moment";

export default function DateTimePretty(props) {
  const videoDate = moment(props.date),
    now = moment();
  const diffInMinutes = now.diff(videoDate, "minutes");
  const diffInHours = now.diff(videoDate, "hours");

  let date = "";
  if (diffInMinutes < 60) {
    date = `${diffInMinutes} минут назад`;
  } else if (diffInHours < 24) {
    date = `${diffInHours} часов назад`;
  } else {
    date = `${now.diff(videoDate, "days")} дней назад`;
  }

  return <DateTime date={date} />;
}
