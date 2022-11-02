import { format, getDay, parse, startOfWeek } from "date-fns";
import { zhTW } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "zh-TW": zhTW,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = () => {
  const md = useMediaQuery("(min-width: 768px)");
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch(
        "https://plankton-app-nanep.ondigitalocean.app/events"
      );
      const data = await response.json();
      setEvents(data);
    };

    requestData();
  }, [setEvents]);

  return (
    <div className={"h-[400px] md:h-[700px] lg:h-[800px] xl:h-[900px]"}>
      <Calendar
        events={events}
        startAccessor={(e: any) => new Date(e.start)}
        view={md ? "month" : "agenda"}
        views={[md ? "month" : "agenda"]}
        localizer={localizer}
        endAccessor={(e: any) => new Date(e.end)}
      />
    </div>
  );
};

export default MyCalendar;
