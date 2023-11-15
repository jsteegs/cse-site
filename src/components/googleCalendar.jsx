import React from "react";
import FullCalendar from '@fullcalendar/react'
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from '@fullcalendar/google-calendar';

class GoogleCalendar extends React.Component {
  render() {
    return (
        <FullCalendar
            plugins={[ listPlugin, googleCalendarPlugin ]}
            initialView="listYear"
            googleCalendarApiKey= {import.meta.env.VITE_GOOGLE_API_KEY}
            eventSources={[
                { googleCalendarId: import.meta.env.VITE_GOOGLE_CALENDAR_URL }
            ]}
        />
      )
  }
}

export default GoogleCalendar;
