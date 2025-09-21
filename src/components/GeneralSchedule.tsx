import { ThemeProvider } from "@material-tailwind/react";

import TableWithStripedColumns from '../components/program'

function Schedule() {
  return (
    <div>


      <h1>Schedule</h1>

      {/* <TableWithStripedColumns/> */}
      <p> The Schedule of the one-day conference will be released in October. </p>




      <TableWithStripedColumns />





      Time Event

      9:00 Registration & Hanging Posters

      9:20 Opening Session (Aula Magna)

      9:30 Oral presentations 1st session

      11:00 Coffee break

      11:30 Poster session

      12:30 Oral presentations 2nd session

      14:00 Lunch

      15:00 Awards and Closing Ceremony (Aula Magna)

      PICTURE

      <h1>Location</h1>

      <p> The GEOMARE Speeches is held at the Faculty of Earth Sciences of the University of Barcelona (UB). </p>

      <p> Address: Martí i Franquès, s/n, Distrito de Les Corts, 08028 Barcelona </p>

      Include a picture of GOOGLE MAPS ?



    </div>
  )
}

export default Schedule

