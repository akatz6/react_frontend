import Time from "./Time";
import { objDay, allTime } from "./CalendarComp";



export default function Day({ day }) {
  const date = day.getDate();
  const dayOfWeek = day.getDay();
  return (
    <div className="day">
      <p className="date">{objDay[dayOfWeek]}</p>
      <h3 className="date border-bottom-date">{date}</h3>
      {allTime.map((time, index) => {
        return <Time key={index} time={time} day={day} />;
      })}
    </div>
  );
}
