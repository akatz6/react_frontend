import { date, allTime } from "./CalendarComp";
import Day from "./Day";
export default function CalendarPage() {
  const value = date();
  return (
    <div className="gridCalendar">
      <div className="gridTime">
        {allTime.map((time, index) => {
          return <p key={index} className="timeDisplay">{time}</p>;
        })}
      </div>
      <div className="calendar">
        {value.map((day, index) => {
          return <Day key={index} day={day} />;
        })}
      </div>
    </div>
  );
}
