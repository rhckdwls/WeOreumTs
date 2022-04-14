import React, { useCallback, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useInput from '@hooks/useInput';

function CalendarTodo() {
  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([
    { title: '산방산등산', start: new Date(2022, 3, 13, 10, 0), end: new Date(2022, 3, 13, 15, 0) },
  ]);
  const [dateMsg, onChangeMsg, setDateMsg] = useInput('');
  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(new Date());
  const [endDate, setEndDate] = useState<Date | [Date, Date] | null>(new Date());

  const DateSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  console.log(startDate, endDate);

  return (
    <div>
      <Calendar localizer={localizer} events={events} style={{ height: 950 }} />
      {/* <form onSubmit={DateSubmit}>
        <input value={dateMsg} onChange={onChangeMsg} />
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={startDate as Date | null | undefined}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={endDate as Date | null | undefined}
          onChange={(date) => setEndDate(date)}
        />
      </form> */}
    </div>
  );
}

export default CalendarTodo;
