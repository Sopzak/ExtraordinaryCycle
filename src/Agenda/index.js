function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var days = [
	{
		name: "Sunday",
		short: "Sun",
		number: 0
	},
	{
		name: "Monday",
		short: "Mon",
		number: 0
	},
	{
		name: "Tuesday",
		short: "Tue",
		number: 0
	},
	{
		name: "Wednesday",
		short: "Wed",
		number: 0
	},
	{
		name: "Thursday",
		short: "Thu",
		number: 0
	},
	{
		name: "Friday",
		short: "Fri",
		number: 0
	},
	{
		name: "Saturday",
		short: "Sat",
		number: 0
	}
];

var DaysHeader = function DaysHeader(_ref) {
  var styles = {
    daysRow: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: "2px",
      paddingBottom: "20px",
    },
    daysCellClass: "daysCell"
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: styles.daysRow
  }, days.map(function (day, _) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "daysCell"
    }, day["short"].toUpperCase() );
  }));
};

var months = [
	{
		name: "January",
		short: "Jan",
		number: 1,
		days: 31
	},
	{
		name: "February",
		short: "Feb",
		number: 2,
		days: 28
	},
	{
		name: "March",
		short: "Mar",
		number: 3,
		days: 31
	},
	{
		name: "April",
		short: "Apr",
		number: 4,
		days: 30
	},
	{
		name: "May",
		short: "May",
		number: 5,
		days: 31
	},
	{
		name: "June",
		short: "Jun",
		number: 6,
		days: 30
	},
	{
		name: "July",
		short: "Jul",
		number: 7,
		days: 31
	},
	{
		name: "August",
		short: "Aug",
		number: 8,
		days: 31
	},
	{
		name: "September",
		short: "Sep",
		number: 9,
		days: 30
	},
	{
		name: "October",
		short: "Oct",
		number: 10,
		days: 31
	},
	{
		name: "November",
		short: "Nov",
		number: 11,
		days: 30
	},
	{
		name: "December",
		short: "Dec",
		number: 12,
		days: 31
	}
];

var isNull = function isNull(obj) {
  return obj === null;
};
var isUndefined = function isUndefined(obj) {
  return typeof obj === 'undefined';
};
var isNullOrUndefined = function isNullOrUndefined(obj) {
  return isNull(obj) || isUndefined(obj);
};

var getDateString = function getDateString(date) {
  return months[date.month].name + " " + date.day + ", " + date.year;
};
var isLeapYear = function isLeapYear(year) {
  return year % 4 === 0;
};
var currentMonth = function currentMonth(task, currentDate) {
  var date = new Date(currentDate.year, currentDate.month, currentDate.day);
  var month = task.startDate.month;
  var year = task.startDate.year;

  if (month === date.getMonth() && year === date.getFullYear()) {
    return true;
  } else if (year <= date.getFullYear() && month <= date.getMonth()) {
    if (task.endDate) {
      var endMonth = task.endDate.month;
      var endYear = task.endDate.year;

      if (endYear > year || endYear === year && endMonth > month) {
        if (endMonth >= date.getMonth() && endYear >= date.getFullYear()) {
          return true;
        }
      }
    }
  }

  return false;
};

var cssStyles = {"rscDaysRow":"_1j-Ck",
  "rscCellText":"_3iRgZ",
  "rscCells":"_2l9pR",
  "rscFirstColumn":"_1wH75",
  "rscEvents":"_1LueL",
  "bg25":"_3dL00 _L25",
  "bg50":"_3dL00 _L50",
  "bg75":"_3dL00 _L75",
  "bg100":"_3dL00 _L100",
  "bgWrite": "_3dL00 _L0",
};

var Event = function Event(_ref) {
  var texts = _ref.texts;
  var bgCss = cssStyles.bg25;
  
  return /*#__PURE__*/React__default.createElement("div", {
    className: cssStyles.rscEvents
  }, texts.map(function (text) {
    if(text !== ''){
      var testArray = text.split('#');
      if(testArray.length > 1){
        if(testArray[1] == 50){
          bgCss = cssStyles.bg50;
        }else{
          if(testArray[1] == 75){
            bgCss = cssStyles.bg75;
          }else{
            if(testArray[1] == 100){
              bgCss = cssStyles.bg100;
            }
          }
        }
      }

      let  txtValor = testArray[0];
      /*var divB = React__default.createElement("div", {
        className: cssStyles.bgWrite
      }, null);*/
      //text = React__default.createElement("div", null, [txtValor, divB]);
      text = React__default.createElement("div", null, txtValor);

      //text =  divB;
    }
    return /*#__PURE__*/React__default.createElement("div", {
      className: bgCss
    }, text
    );
  }));
};

Event.propTypes = {
  text: PropTypes.array
};
Event.defaultProps = {
  text: []
};

var CalenderCells = function CalenderCells(_ref) {
  var date = _ref.date,
      setMonthYear = _ref.setMonthYear,
      agenda = _ref.agenda;

  var _useState = React.useState(Array(28).fill().map(function (_, idx) {
    return 1 + idx;
  })),
      days = _useState[0],
      setDays = _useState[1];

  var _useState2 = React.useState([]),
      firstDays = _useState2[0],
      setFirstDays = _useState2[1];

  var _useState3 = React.useState([]),
      extraDays = _useState3[0],
      setExtraDays = _useState3[1];

  var _useState4 = React.useState({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }),
      calendarDate = _useState4[0],
      setDate = _useState4[1];

  var _useState5 = React.useState(Array(28).fill().map(function (_) {
    return [];
  })),
      monthlyAgenda = _useState5[0],
      setMonthlyAgenda = _useState5[1];

  React.useEffect(function () {
    var numberOfDays = calendarDate.month === 1 && isLeapYear(calendarDate.year) === true ? months[calendarDate.month].days + 1 : months[calendarDate.month].days;
    var date = new Date(calendarDate.year, calendarDate.month, 1);
    var endDate = new Date(calendarDate.year, calendarDate.month, numberOfDays);
    var day = date.getDay();
    var day2 = endDate.getDay();
    var previousMonth = calendarDate.month === 0 ? 11 : calendarDate.month - 1;
    var previousDays = previousMonth === 1 && isLeapYear(calendarDate.year) === true ? months[previousMonth].day + 1 : months[previousMonth].days;
    var firstDays = Array(day).fill().map(function (_, d) {
      return previousDays - d;
    }).reverse();
    var monthDays = Array(numberOfDays).fill().map(function (_, d) {
      return 1 + d;
    });
    var extraDays = Array(6 - day2).fill().map(function (_, d) {
      return 1 + d;
    });
    setFirstDays(firstDays);
    setDays(monthDays);
    setExtraDays(extraDays);
    setMonthYear(months[calendarDate.month].name + " " + calendarDate.year);
    getMonthlyAgenda();
    return function () {};
  }, [calendarDate]);
  React.useEffect(function () {
    var newYear = calendarDate.year;
    var newMonth = calendarDate.month;

    if (date) {
      if (isNullOrUndefined(date.year) === false) {
        if (date.year > 0) {
          newYear = date.year;
        }
      }

      if (isNullOrUndefined(date.month) === false) {
        if (date.month >= 0 && date.month <= 11) {
          newMonth = date.month;
        }
      }

      setDate({
        day: calendarDate.day,
        month: newMonth,
        year: newYear
      });
    }

    return function () {};
  }, [date]);

  var getMonthlyAgenda = function getMonthlyAgenda() {
    var numberOfDays = calendarDate.month === 1 && isLeapYear(calendarDate.year) === true ? months[calendarDate.month].days + 1 : months[calendarDate.month].days;
    var currentAgenda = Array(numberOfDays).fill().map(function (_) {
      return [];
    });
    agenda.map(function (task) {
      if (currentMonth(task, calendarDate) === true) {
        //alert(JSON.stringify(task))
        var pos = currentAgenda[task.startDate.day - 1];
        pos.push(task.title + '#' + task.load);
        currentAgenda[task.startDate.day - 1] = pos;
      }
    });
    setMonthlyAgenda(currentAgenda);
  };
  return /*#__PURE__*/React__default.createElement("div", {
    id: "rscCalendarCells",
    className: cssStyles.rscDaysRow
  }, firstDays.map(function (day, key) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: key % 7 === 0 ? cssStyles.rscCells + " " + cssStyles.rscFirstColumn : "" + cssStyles.rscCells
    }, /*#__PURE__*/React__default.createElement("div", {
      className: cssStyles.rscCellText,
      style: {
        color: "rgba(0,0,0,0.3)"
      }
    }, day));
  }), days.map(function (day, key) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: key % 7 === 0 ? cssStyles.rscCells + " " + cssStyles.rscFirstColumn : "" + cssStyles.rscCells
    }, /*#__PURE__*/React__default.createElement("div", {
      className: cssStyles.rscCellText
    }, day, /*#__PURE__*/React__default.createElement(Event, {
      texts: monthlyAgenda[key]
    })));
  }), extraDays.map(function (day, key) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: key % 7 === 0 ? cssStyles.rscCells + " " + cssStyles.rscFirstColumn : "" + cssStyles.rscCells
    }, /*#__PURE__*/React__default.createElement("div", {
      className: cssStyles.rscCellText,
      style: {
        color: "rgba(0,0,0,0.3)"
      }
    }, day));
  }));
};

CalenderCells.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  day: PropTypes.number,
  setMonthYear: PropTypes.func,
  agenda: PropTypes.array
};
CalenderCells.defaultProps = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  day: 1,
  setMonthYear: function setMonthYear() {},
  agenda: []
};

var styles = {"rscMonthYear":"_XUQDT","rscCalendar":"_3_zWf"};

var Calendar = function Calendar(_ref) {
  var year = _ref.year,
      month = _ref.month,
      day = _ref.day,
      agenda = _ref.agenda;

  var _useState = React.useState(""),
      monthYear = _useState[0],
      setMonthYear = _useState[1];

  return /*#__PURE__*/React__default.createElement("div", {
    id: "rscCalenderComponent",
    className: styles.rscCalendar
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.rscMonthYear
  }, monthYear), /*#__PURE__*/React__default.createElement(DaysHeader, null), /*#__PURE__*/React__default.createElement(CalenderCells, {
    agenda: agenda,
    setMonthYear: setMonthYear,
    date: {
      day: day,
      month: month,
      year: year
    }
  }));
};

Calendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  day: PropTypes.number,
  agenda: PropTypes.array
};
Calendar.defaultProps = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  day: 1,
  agenda: []
};

var styles$1 = {"rscButton":"_pCKfW .no-print","rscButtonRow":"_1kB3k","rscButtonSection":"_3jOu4 no-print", "rscButtonTitle":"_title"};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Buttons = function Buttons(_ref) {
  var text = _ref.text,
      noRightBorder = _ref.noRightBorder,
      onClick = _ref.onClick;
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: onClick,
    className: styles$1.rscButton,
    style: _extends({}, noRightBorder ? {
      borderRight: "unset !important"
    } : {})
  }, text);
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  noRightBorder: PropTypes.any,
  onClick: PropTypes.func
};
Buttons.defaultProps = {
  text: "",
  onClick: function onClick() {}
};

var ButtonRows = function ButtonRows(_ref) {
  var showAgenda = _ref.showAgenda,
      setShowAgenda = _ref.setShowAgenda,
      goToToday = _ref.goToToday,
      nextMonth = _ref.nextMonth,
      previousMonth = _ref.previousMonth,
      showSchedule = _ref.showSchedule,
      setupAgenda = _ref.setupAgenda;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.rscButtonRow
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.rscButtonSection
  }, /*#__PURE__*/React__default.createElement(Buttons, {
    onClick: goToToday,
    text: 'Today'
  }), /*#__PURE__*/React__default.createElement(Buttons, {
    onClick: previousMonth,
    text: 'Back Month'
  }), /*#__PURE__*/React__default.createElement(Buttons, {
    onClick: nextMonth,
    noRightBorder: true,
    text: 'Next Month'
  }),showSchedule ? /*#__PURE__*/React__default.createElement(Buttons, {
    onClick: function onClick() {
      return setShowAgenda(!showAgenda);
    },
    noRightBorder: true,
    text: 'Agenda'
  }) :''), [/*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      return setShowAgenda(!showAgenda);
    },
    className: styles$1.rscButtonTitle,
  }, 'Extraordinary Cycle')]);
};

ButtonRows.propTypes = {
  showAgenda: PropTypes.bool,
  setShowAgenda: PropTypes.func,
  goToToday: PropTypes.func,
  nextMonth: PropTypes.func,
  previousMonth: PropTypes.func,
  showSchedule: PropTypes.bool,
  setupAgenda: PropTypes.func,
};
ButtonRows.defaultProps = {
  showAgenda: false,
  setShowAgenda: function setShowAgenda() {},
  goToToday: function goToToday() {},
  nextMonth: function nextMonth() {},
  previousMonth: function previousMonth() {},
  showSchedule: true,
  setupAgenda: {}
};

var styles$2 = {"rscAgenda":"_2bfAC","rscAgendaHeader":"_T0JT4","rscAgendaRow":"_2A2JS","rscAgendaList":"_1I9gp","rscSeeAll":"_1PWNR","rscAgendaInfo":"_2zOV9","rscAgendaInfoTitle":"_3t0sr","rscAgendaInfoDate":"_Kz8BH"};

var Agenda = function Agenda(_ref) {
  //console.log(JSON.stringify(_ref));
  var agenda = _ref.agenda,
      currentDate = _ref.currentDate;

  var _useState = React.useState([]),
      agendaList = _useState[0],
      setAgendaList = _useState[1];

  var _useState2 = React.useState(false),
      seeAll = _useState2[0],
      setSeeAll = _useState2[1];

  React.useEffect(function () {
    setAgendaList(agenda.filter(function (task) {
      return currentMonth(task, currentDate);
    }));
    return function () {};
  }, [agenda, currentDate]);
  React.useEffect(function () {
    if (seeAll === true) {
      setAgendaList(agenda);
    } else {
      setAgendaList(agenda.filter(function (task) {
        return currentMonth(task, currentDate);
      }));
    }

    return function () {};
  }, [seeAll]);
  return /*#__PURE__*/React__default.createElement("div", {
    id: "rscAgenda",
    className: styles$2.rscAgenda
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.rscAgendaHeader + "  " + styles$2.rscAgendaRow
  }, "Schedule"), /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.rscAgendaList
  }, agendaList.map(function (task, key) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles$2.rscAgendaInfo + "  " + styles$2.rscAgendaRow
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$2.rscAgendaInfoTitle
    }, task.title ), /*#__PURE__*/React__default.createElement("div", {
      className: styles$2.rscAgendaInfoDate
    }, getDateString(task.startDate)));
  })), /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      return setSeeAll(!seeAll);
    },
    className: styles$2.rscSeeAll
  }, "See All"));
};

Agenda.propTypes = {
  agenda: PropTypes.array,
  date: PropTypes.object
};
Agenda.defaultProps = {
  agenda: [],
  date: {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }
};

var styles$3 = {"rscMainContainer":"_2zAQ1","rscComponentContainer":"_3Mte1","rscCalenderContainer":"_uomxK","rscCreateButton":"_3xIta","rscAgendaContainer":"_pUw5o","rscAgendaOpen":"_1p5ok"};

var ScheduleCalendar = function ScheduleCalendar(_ref) {
  var currentDate = _ref.currentDate,
      agenda = _ref.agenda,
      containerStyle = _ref.containerStyle,
      containerClassName = _ref.containerClassName,
      showSchedule = _ref.showSchedule,
      setupAgenda = _ref.setupAgenda;


  var _useState = React.useState(false),
  showAgenda = _useState[0],
  setShowAgenda = _useState[1];

  var _useState2 = React.useState({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }),
      date = _useState2[0],
      setDate = _useState2[1];

  var agendaRef = React__default.createRef();
  
  React.useEffect(function () {
    var currentRef = agendaRef.current;
    if(showSchedule){
      if (showAgenda === true) 
        currentRef.classList.add(styles$3.rscAgendaOpen);
      else 
        currentRef.classList.remove(styles$3.rscAgendaOpen);
    }
      
    return function () {};
  }, [showAgenda]);
  React.useEffect(function () {
    if (!isNaN(currentDate.getTime())) setDate({
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear()
    });
    return function () {};
  }, [currentDate]);

  var previousMonth = function previousMonth() {
    if (date.month === 0) {
      setDate({
        day: date.day,
        month: 11,
        year: date.year - 1
      });
    } else {
      setDate({
        day: date.day,
        month: date.month - 1,
        year: date.year
      });
    }
  };

  var nextMonth = function nextMonth() {
    if (date.month === 11) {
      setDate({
        day: date.day,
        month: 0,
        year: date.year + 1
      });
    } else {
      setDate({
        day: date.day,
        month: date.month + 1,
        year: date.year
      });
    }
  };

  var goToToday = function goToToday() {
    var d = new Date();
    setDate({
      day: date.day,
      month: d.getMonth(),
      year: d.getFullYear()
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    style: containerStyle,
    className: containerClassName ? containerClassName : styles$3.rscMainContainer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.rscComponentContainer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.rscCalenderContainer
  }, /*#__PURE__*/React__default.createElement(ButtonRows, {
    previousMonth: previousMonth,
    nextMonth: nextMonth,
    goToToday: goToToday,
    setShowAgenda: setShowAgenda,
    showAgenda: showAgenda,
    showSchedule: showSchedule,
    setupAgenda: setupAgenda,
  }), /*#__PURE__*/React__default.createElement(Calendar, {
    agenda: agenda,
    month: date.month,
    year: date.year,
    day: date.day
  })), /*#__PURE__*/React__default.createElement("div", {
    ref: agendaRef,
    className: styles$3.rscAgendaContainer
  }, /*#__PURE__*/React__default.createElement(Agenda, {
    agenda: agenda,
    currentDate: date
  }))));
};

ScheduleCalendar.propTypes = {
  agenda: PropTypes.array,
  containerStyle: PropTypes.object,
  currentDate: PropTypes.instanceOf(new Date()),
  showSchedule: PropTypes.bool,
  setupAgenda: PropTypes.func
};
ScheduleCalendar.defaultProps = {
  agenda: [],
  containerStyle: {},
  currentDate: new Date(),
  showSchedule: true,
  setupAgenda: {}
};

module.exports = ScheduleCalendar;
//# sourceMappingURL=index.js.map
