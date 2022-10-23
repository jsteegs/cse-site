import CalendarTUI from "@toast-ui/react-calendar";
import { EventObject } from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { useEffect, useRef } from "react";

export function Calendar() {
  const cal = useRef(null);

  return (
    <div>
      <CalendarTUI ref={cal} view="month" isReadOnly useDetailPopup events={} />
    </div>
  );
}
