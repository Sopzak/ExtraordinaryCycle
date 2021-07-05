import AgendaCalender from './Agenda'
import './App.css';
import React, { useState } from 'react';
import SocialFollow from "./SocialFollow"

function App() {
  var today = new Date();
  const [currencyDate, setCurrencyDate] = useState(today);

  function dataAdd(days){
    var date = new Date(currencyDate);
    date.setDate(date.getDate() + days);
    //setCurrencyDate( date );
    var month = date.getUTCMonth(); //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    //setCurrencyDate( date );
    return {day: day, month: month, year: year, date: date};
  }


  const [duraction, setDuraction] = useState(3);
  const [phase, setPhase] = useState(4);
  const [restart, setRestart] = useState(false);
  const [jumpWeekend, setJumpWeekend] = useState(false);
  const [toPrint, setToPrint] = useState(false);
  const [dayStart,setDayStart] = useState(1);
 
  var agendaIni =   [];

  let countDay =1;
  for(var i = 0; i < phase; i++){
    for(var ix = 0; ix < duraction; ix++){
      let day = { title: "DIA " + countDay, startDate: dataAdd(countDay), load: ((5 + i - phase) * 25)};
      agendaIni.push(day);
      countDay++;
    }
  }

  const [agenda, setAgenda] = useState(agendaIni);

  var debug = false;

  function setup(){
    var countDay = 0;
    var newAgenda =[];
    var numDay = dayStart;
    var repete = 1;
    let day = null;
    if(restart){
      repete =2;
    }

    for (let index = 0; index < repete; index++) {
      for(var i = 0; i < phase; i++){
        for(var ix = 0; ix < duraction; ix++){
          day = { title: "DIA " + numDay, startDate: dataAdd(countDay), load: ((5 + i - phase) * 25)};

          if(jumpWeekend){
            //console.log(day.startDate.date.getDay());
            if(day.startDate.date.getDay() == 5){//Saturday
              countDay+= 2;
              day = { title: "DIA " + numDay, startDate: dataAdd(countDay), load: ((5 + i - phase) * 25)};
            }
            if(day.startDate.date.getDay() == 6){//Saturday
              countDay+= 1;
              day = { title: "DIA " + numDay, startDate: dataAdd(countDay), load: ((5 + i - phase) * 25)};
            }
          }

          newAgenda.push(day);
          countDay++;
          numDay++;
        }
      }
    }

    if(newAgenda.length > 0){
      setAgenda(newAgenda);
    }
  };

  function print(){
    window.print();
  }

  var styles = {
    "rscMainContainer":"_2zAQ1",
    "rscComponentContainer":"_3Mte1",
    "rscCalenderContainer":"_uomxK",
    "rscCreateButton":"_3xIta",
    "rscAgendaContainer":"_pUw5o",
    "rscAgendaOpen":"_1p5ok",
    "rscBackgroundOff" : "no-print"};

    if(!toPrint){
      styles.rscBackgroundOff = "bodyBack";
    }else{
      styles.rscBackgroundOff = "bodyBackOff";
    }
  return ( 
      <div className={styles.rscBackgroundOff} >
        {(debug? JSON.stringify(agenda): '')}
        <div className="setup no-print">
          <label>
            Start Date:
          <input type='date' 
            value={currencyDate} 
            placeholder="Start Date" 
            onChange={(c) => {setCurrencyDate(c.target.value)}} />
         </label>
         <label>
            Phase duraction (days):
          <input type='text' 
            value={duraction} 
            placeholder="Duraction" 
            onChange={(c) => {setDuraction(c.target.value.replace(/[^\d]/,''));}} />
          </label>
          <label>
            Phases:
            <select id="lang" 
              onChange={(c) => {setPhase(c.target.value.replace(/[^\d]/,''));}}
              value={phase} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <label>
            Day start at:
          <input type='text' 
            value={dayStart} 
            placeholder="1" 
            onChange={(c) => {setDayStart(c.target.value.replace(/[^\d]/,''));}} />
          </label>
          <label>
            Repeat after the end of the cycle:
            <input
              name="restart"
              type="checkbox"
              checked={restart}
              onChange={(c) => {setRestart(c.target.checked);}} />
          </label>
          <label>
            Pause on weekend:
            <input
              name="weekend"
              type="checkbox"
              checked={jumpWeekend}
              onChange={(c) => {setJumpWeekend(c.target.checked);}} />
          </label>
          <label>
            Print with out background:
            <input
              name="toPrint"
              type="checkbox"
              checked={toPrint}
              onChange={(c) => {setToPrint(c.target.checked);}} />
          </label>
          <button className="btnSetup" onClick={() => setup()} >Create calendar</button>
          <button className="btnSetup" onClick={() => print()} >Print</button>
        </div>
        <AgendaCalender 
          containerStyle={{height: "calc(100% - 51x)"}} 
          containerClassName={styles}
          showSchedule={false}
          agenda={agenda} 
          currentDate={today} />
          <SocialFollow />
      </div>
  );
}


export default App;
