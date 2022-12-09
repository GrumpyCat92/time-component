import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

export default function Video(props) {
  const PrettyTime = DateTimePretty(DateTime);
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <PrettyTime date={props.date} />
    </div>
  );
}
