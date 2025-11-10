
function Schedule() {
  return (
    <div>


      <h1 className="mt-0 mb-0">Schedule</h1>

      {/* <TableWithStripedColumns/> */}
      <p> The GeoMare 2025 program </p>



      {/* === Desktop view (your current table) === */}
      <div className="hidden sm:block overflow-x-auto mt-8">
        {/* aquí va tu tabla completa, tal como la tienes ahora */}

        <div className="overflow-x-auto -mt-3">
          <table className="min-w-full text-sm font-mono text-left border-separate border-spacing-y-4 ">
            <thead className="bg-oil-petrol3 text-white uppercase sticky top-0 z-10">
              <tr className="text-center">
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Activity</th>
                <th className="px-4 py-2">Participants</th>
              </tr>
            </thead>
            <tbody className="text-earth-accent ">

              <tr className="odd:bg-oil-petrol1 ">
                <td className="w-1/6 px-4 py-2 font-semibold"> 09:00 – 09:30 </td>
                <td className="w-0.5/6 px-4 py-2 font-semibold text-center"> Registration and Poster Hanging</td>
                <td className="w-5/6 px-4 py-2 text-center"> Organizing Committee, Speakers and Poster Presenters </td>
              </tr>

              <tr className="even:bg-oil-petrol1 my-0">
                <td className="px-4 py-6 font-semibold ">09:30 – 10:00 </td>
                <td className="px-4 py-2 text-center font-semibold my-0"> Welcome Session </td>
                <td className="px-4 py-2 text-center"> Organizing Committee </td>
              </tr>

              <tr className="odd:bg-oil-petrol1 ">
                <td className="px-4 py-2 font-semibold">10:00 – 11:00</td>
                <td className="px-4 py-2 font-semibold text-center">Oral Presentation Group 1</td>
                <td className="px-4 py-2 ">

                  <ul className="list-disc list-inside space-y-3 leading-relaxed">

                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Sara Campderrós</strong> – Assessing the use of Nd isotopes extracted from multiple authigenic phases to reconstruct past circulation along the Iberian Margin</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Àngel Tisora Arrebola</strong> – Why the karst bauxites in Bahoruco (SW Dominican Republic) are the most REY-enriched in the world?</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Carmen Corbalán Andreu</strong> – Project Reef – Tropical Miocene Seas Connecting the Cities of Elche and Alicante</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide" >Helena Escalona Orellana</strong> – Assessing biostimulation efficiency to enhance denitrification in a constructed wetland using isotopic tools</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Albert Fernández Lagunas</strong> – Multi-isotopic (δ34S, δ18O) tracing of alkaline persulfate activation in a column experiment with recycled concrete</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Helena Fos</strong> – Climate variability of dense water overflows reproduced by reanalysis in the Northwestern Mediterranean and the Denmark Strait</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Pau Bardi Puigdefàbregas</strong> – Habitat use of two marine benthic invertebrates along Antarctic glacier-influenced fjords: a stable isotope approach</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Sandra Gimeno Monforte</strong> – Spatio-temporal dynamics of ciguateric dinoflagellates in the Balearic Islands</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Athina Kekelou</strong> – Fish otolith sedimentary record from a large biogeographical transect in North Atlantic Ocean</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Gabriel Sonoda González</strong> – Diversity and substrate usage of plastic-fouling fauna in the Western Mediterranean</li>
                  </ul>


                </td>
              </tr>

              <tr className="even:bg-oil-petrol1 my-8">
                <td className="px-4 py-2 font-semibold">11:00 – 11:20</td>
                <td className="px-4 py-2 font-semibold text-center">   Poster Flash   Presentations          </td>
                <td className="px-4 py-2">

                  <ul className="list-disc list-inside space-y-3 leading-relaxed">
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Pello Arriolabengoa Zubizarreta </strong>– Magnetostratigraphy of the middle Miocene La Muela section: unveiling the correlation among the central Ebro basin lacustrine units</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Anja Boekholt </strong>– Tectonic and Elastic Structure of the Chilean Subduction Zone from Seismic Imaging at 34.5°S</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Marina Briones Rizo </strong>– Plastic Degradation in the Ocean: A Previously Overlooked Source of Volatile Organic Compounds</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Nuria Garrigós </strong> – Organic Pollutant retention in Mediterranean Marine Sponges</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Laura Moscat</strong> – High-Resolution Environmental Monitoring of the Upper Shelf in Torredembarra (Northwestern Mediterranean Sea) to Track Gorgonian Restoration</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Louise Muir </strong>– Unraveling the eruptive evolution of the Upper Acıgöl Tuff in Central Anatolia: Stratigraphic and geochemical insights into the youngest Cappadocian caldera-forming ignimbrite</li>
                    {/* <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Jan Aymerich Nicolàs </strong>– Recursive Binary Clustering for Tephra Correlation: Case Studies from Central Italy and the Black Sea </li> */}
                    {/* <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Enrico Paolo Curcuruto </strong>–</li> */}
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Noemi Jacobo-Quiñones</strong>– Characterisation of cascading landslide hazards and implications on fluvial processes at catchment scale (Tordera river basin, Catalonia) </li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Maria-Sofía Kapiri</strong> – Iberian Climate Change palaeoarchives at the highest temporal resolution for addressing the thermo-hydro-climate unknowns ahead (extreme events) </li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Marc Ollé López </strong>– Demonstrating Late Quaternary tectonic activity on the Western margin of the Valencia Trough (NE Spain): Insights from geophysics and paleoseismology</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide"> David Canova </strong>– Salt Structures in the Eastern External Betics fold and thrust belt, SE Iberia - Geologic Maps and Cross Sections</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide"> William Munday </strong>– From field pictures to cross sections: deciphering the tectonic evolution of the Chilean Central Andes</li>
                  </ul>
                </td>
              </tr>

              <tr className="odd:bg-oil-petrol1">
                <td className="px-4 py-2 font-semibold">11:20 – 12:30</td>
                <td className="px-4 py-2 font-semibold text-center"> Coffee Break  and Poster Session</td>
                <td className="px-4 py-2 ">All participants</td>
              </tr>

              <tr className="even:bg-oil-petrol1">
                <td className="px-4 py-2 font-semibold">12:30 – 13:30</td>
                <td className="px-4 py-2  font-semibold text-center">Oral Presentation Group 2</td>
                <td className="px-4 py-2 ">

                  <ul className="list-disc list-inside space-y-3 leading-relaxed">
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Gustavo Kenji Lacerda Orita </strong>– Non-Evaporitic Evaporites in Deep Marine Settings: petrographical evidence from the Western Mediterranean</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Ming Ma </strong>– Quantitative provenance analysis of Oligocene sediments in the northwestern South China Sea and its implications for paleo-Red River evolution</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Marco A. Oliva Gutiérrez </strong>- Benchmark Modeling of Hydrothermal Flow in Porous Media and Fault Zones.</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Maria Sierks </strong>– Short-term sediment deposition patterns along the Palamós submarine canyon</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Pau Masdeu Monclús </strong>– Underwater Power Cables: Environmental Thread or Neutral Infrastructure</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Olmo Míguez Salas </strong>– Deep-sea neoichnology: a brief overview</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Laura Pajot </strong>– The deep impact of climate on woody angiosperm evolution from the Cretaceous to the Paleogene</li>

                  </ul>
                </td>
              </tr>

              <tr className="odd:bg-oil-petrol1">
                <td className="px-4 py-2 font-semibold">13:30 – 15:00</td>
                <td className="px-4 py-6  font-semibold text-center "> Lunch </td>
                <td className="px-4 py-2 my-8 "> All participants</td>
              </tr>
              <tr className="even:bg-oil-petrol1">
                <td className="px-4 py-2 font-semibold">15:00 – 15:30</td>
                <td className="px-4 py-2 font-semibold text-center"> Oral Presentation Group 3</td>
                <td className="px-4 py-2 ">

                  <ul className="list-disc list-inside space-y-3 leading-relaxed">
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Juan Usó Canós </strong>– Potential for blue carbon development and ecosystem services on a shallow coastal shelf off SW Tenerife (Canary Islands)</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">José Jiménez</strong> – Assessment of Flow and Contaminant Paths in a Fractured Bedrock Aquifer Through a Pumping Test with Multiple Piezometers: The Òdena Case Study</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Alejandra Sánchez</strong> – Unraveling past oceanic pCO₂: the boron isotope-pH proxy</li>
                    <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">Eider Rua</strong> – Influence of Coral Buildups on Fan-Delta Sedimentation: Facies Architecture and Heterogeneity in the Eocene Sant Llorenç del Munt Complex (Ebro Basin)</li>
                  </ul>
                </td>
              </tr>
              <tr className="odd:bg-oil-petrol1">
                <td className="px-4 py-2 font-semibold">15:30 – 16:00</td>
                <td className="px-4 py-2  font-semibold text-center"> Free Time while Jury Deliberation </td>
                <td className="px-4 py-2 text-center"> Organizing Committee</td>
              </tr>
              <tr className="even:bg-oil-petrol1">
                <td className="px-4 py-2 font-semibold">16:00 – 17:00</td>
                <td className="px-4 py-2  font-semibold text-center"> Closing Ceremony and Awards</td>
                <td className="px-4 py-2 text-center "> All participants </td>
              </tr>

            </tbody>
          </table>
        </div>



      </div>

      {/* === Mobile view (cards) === */}
      <div className="block sm:hidden space-y-6 mt-6">

        {/* Registration */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            09:00 – 09:30
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Registration and Poster Hanging
          </h3>
          <p className="text-sm mt-2 text-earth-accent">
            Organizing Committee, Speakers and Poster Presenters
          </p>
        </div>

        {/* Welcome Session */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            09:30 – 10:00
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Welcome Session
          </h3>
          <p className="text-sm mt-2 text-earth-accent">
            Organizing Committee
          </p>
        </div>

        {/* Oral Presentation Group 1 */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            10:00 – 11:00
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Oral Presentation Group 1
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm mt-2 leading-relaxed">
            <li className="pl-4 [text-indent:-1rem]"><strong className="text-white font-semibold">Sara Campderrós</strong> – Assessing the use of Nd isotopes extracted from multiple authigenic phases to reconstruct past circulation along the Iberian Margin      </li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Àngel Tisora Arrebola</strong> – Why the karst bauxites in Bahoruco (SW Dominican Republic) are the most REY-enriched in the world? </li>
            <li className="pl-4 [text-indent:-1rem]"> <strong className="text-white font-semibold">Carmen Corbalán Andreu</strong> – Project Reef – Tropical Miocene Seas Connecting the Cities of Elche and Alicante    </li>
            <li className="pl-4 [text-indent:-1rem]"> <strong className="text-white font-semibold">Helena Escalona Orellana</strong> – Assessing biostimulation efficiency to enhance denitrification in a constructed wetland using isotopic tools </li>
            <li className="pl-4 [text-indent:-1rem]"> <strong className="text-white font-semibold">Albert Fernández Lagunas</strong> – Multi-isotopic (δ³⁴S, δ¹⁸O) tracing of alkaline persulfate activation in a column experiment with recycled concrete      </li>
            <li className="pl-4 [text-indent:-1rem]"> <strong className="text-white font-semibold">Helena Fos</strong> – Climate variability of dense water overflows reproduced by reanalysis in the Northwestern Mediterranean and the Denmark Strait  </li>
            <li className="pl-4 [text-indent:-1rem]"><strong className="text-white font-semibold">Pau Bardi Puigdefàbregas</strong> – Habitat use of two marine benthic invertebrates along Antarctic glacier-influenced fjords: a stable isotope approach    </li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Sandra Gimeno Monforte</strong> – Spatio-temporal dynamics of ciguateric dinoflagellates in the Balearic Islands</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Athina Kekelou</strong> – Fish otolith sedimentary record from a large biogeographical transect in North Atlantic Ocean</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Gabriel Sonoda González</strong> – Diversity and substrate usage of plastic-fouling fauna in the Western Mediterranean</li>

          </ul>
        </div>

        {/* Poster Flash Presentation */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            11:00 – 11:20
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Poster Flash Presentation
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm mt-2 leading-relaxed">
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Pello Arriolabengoa Zubizarreta </strong>– Magnetostratigraphy of the middle Miocene La Muela section: unveiling the correlation among the central Ebro basin lacustrine units</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Anja Boekholt </strong>– Tectonic and Elastic Structure of the Chilean Subduction Zone from Seismic Imaging at 34.5°S</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Marina Briones Rizo </strong>– Plastic Degradation in the Ocean: A Previously Overlooked Source of Volatile Organic Compounds</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Nuria Garrigós </strong> – Organic Pollutant retention in Mediterranean Marine Sponges</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Laura Moscat</strong> – High-Resolution Environmental Monitoring of the Upper Shelf in Torredembarra (Northwestern Mediterranean Sea) to Track Gorgonian Restoration</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Louise Muir </strong> – Unraveling the eruptive evolution of the Upper Acıgöl Tuff in Central Anatolia: Stratigraphic and geochemical insights into the youngest Cappadocian caldera-forming ignimbrite</li>
            {/* <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Jan Aymerich Nicolàs </strong>– Recursive Binary Clustering for Tephra Correlation: Case Studies from Central Italy and the Black Sea </li> */}
            {/* <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Enrico Paolo Curcuruto </strong>–</li> */}
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Noemi Jacobo-Quiñones</strong> – Characterisation of cascading landslide hazards and implications on fluvial processes at catchment scale (Tordera river basin, Catalonia) </li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Maria-Sofía Kapiri</strong> – Iberian Climate Change palaeoarchives at the highest temporal resolution for addressing the thermo-hydro-climate unknowns ahead (extreme events) </li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Marc Ollé López </strong>– Demonstrating Late Quaternary tectonic activity on the Western margin of the Valencia Trough (NE Spain): Insights from geophysics and paleoseismology</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide"> David Canova </strong>– Salt Structures in the Eastern External Betics fold and thrust belt, SE Iberia - Geologic Maps and Cross Sections</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide"> William Munday </strong>– From field pictures to cross sections: deciphering the tectonic evolution of the Chilean Central Andes</li>
          </ul>
        </div>

        {/* Coffee Brak */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            11:20 – 12:30
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Coffee Break
          </h3>
          <p className="text-sm mt-2 text-earth-accent">
            Organizing Committee
          </p>
        </div>

        {/* Oral Presentation Group 2 */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            12:30 – 13:30
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Oral Presentation Group 2
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm mt-2 leading-relaxed">

            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Gustavo Kenji Lacerda Orita </strong>– Non-Evaporitic Evaporites in Deep Marine Settings: petrographical evidence from the Western Mediterranean</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Ming Ma </strong>– Quantitative provenance analysis of Oligocene sediments in the northwestern South China Sea and its implications for paleo-Red River evolution</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Marco A. Oliva Gutiérrez </strong>- Benchmark Modeling of Hydrothermal Flow in Porous Media and Fault Zones.</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Maria Sierks </strong>– Short-term sediment deposition patterns along the Palamós submarine canyon</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Pau Masdeu Monclús </strong>– Underwater Power Cables: Environmental Thread or Neutral Infrastructure</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Olmo Míguez Salas </strong>– Deep-sea neoichnology: a brief overview</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Laura Pajot </strong>– The deep impact of climate on woody angiosperm evolution from the Cretaceous to the Paleogene</li>

          </ul>
        </div>

        {/* Lunch */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            13:30 – 15:00
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Lunch
          </h3>
          <p className="text-sm mt-2 text-earth-accent">
            All Participants
          </p>
        </div>

        {/* Oral Presentation Group 3 */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            15:00 – 15:30
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Oral Presentation Group 3
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm mt-2 leading-relaxed">

            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Juan Usó Canós </strong>– Potential for blue carbon development and ecosystem services on a shallow coastal shelf off SW Tenerife (Canary Islands)</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold tracking-wide">José Jiménez</strong> – Assessment of Flow and Contaminant Paths in a Fractured Bedrock Aquifer Through a Pumping Test with Multiple Piezometers: The Òdena Case Study</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Alejandra Sánchez</strong> – Unraveling past oceanic pCO₂: the boron isotope-pH proxy</li>
            <li className="pl-4  [text-indent:-1rem]"> <strong className="text-white font-semibold ">Eider Rua</strong> – Influence of Coral Buildups on Fan-Delta Sedimentation: Facies Architecture and Heterogeneity in the Eocene Sant Llorenç del Munt Complex (Ebro Basin)</li>

          </ul>
        </div>

        {/* Jury Deliveration */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            15:30 – 16:00
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Free Time while Jury Deliberation
          </h3>
          <p className="text-sm mt-2 text-earth-accent">
            Organizing Committee
          </p>
        </div>

        {/* Closing */}
        <div className="bg-oil-petrol1 rounded-2xl p-4 shadow-md text-earth-accent border border-oil-petrol3/40">
          <p className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">
            16:00 – 17:00
          </p>
          <h3 className="text-base font-bold text-white mt-1">
            Closing Ceremony and Awards
          </h3>
          <p className="text-sm mt-2 text-earth-accent">
            All Participants
          </p>
        </div>

      </div>











      <div>
        <h1>Location</h1>

        <p> The GEOMARE Speeches is held at the Faculty of Earth Sciences of the University of Barcelona (UB). </p>

        <p> Address: Martí i Franquès, s/n, Distrito de Les Corts, 08028 Barcelona </p>

        <div>
          <img
            className=" mt-20 mx-auto xsm:size-auto md:w-3/4 "
            src="./img/location.png"
            alt="Organization of the Marine Biodiversity and Evolution Department"
          />
          <p className="mx-auto text-base text-center text-gray-500 text-opacity-90 xsm:text-justify ">
            Route to Faculty of Earth Science from Palau Reial subway station.
          </p>
        </div>

      </div>







    </div>
  )
}

export default Schedule

