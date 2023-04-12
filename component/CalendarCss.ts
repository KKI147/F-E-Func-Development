import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import styled from "styled-components";

export const StCalendar = styled(Calendar)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CustomerCalendar = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  justify-content: center;

  .react-calendar {
    /* line-height: 2.5rem;
    border-radius: 12px; */
    border-radius: 12px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.3;
  }

  .react-calendar__viweContainer {
    position: relative;
    height: 80%;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  // nav 화살표
  .react-calendar__navigation {
    margin: 0 2rem 0.5rem;
    display: flex;
    height: 5rem;
    background: none;
  }
  .react-calendar__navigation button {
    width: 100px;
    background: none;
  }
  // nav 년월
  .react-calendar__navigation button:disabled {
    /* margin-top: 1rem;
    background-color: #fff;
    font-size: 2rem;
    color: #303030; */
  }
  .react-calendar__navigation button:enabled {
    color: #303030;
    background-color: #fff;
    border-radius: 50%;
  }

  .react-calendar__month-view {
    /* line-height: 3; */
  }

  // 요일
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    color: #303030;
    margin: 0 0 1.5rem 0;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
    position: relative;
    width: 200px;
    height: 200px;
  }

  // 요일 박스
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    width: 70px;
    height: 70px;
  }
  /* .react-calendar__tile {

    width: 50px;
    height: 50px;
    padding: 1.2rem 0.5rem;

    text-align: center;

  } */
  .react-calendar__title > abbr {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid orange;
  }

  // 다른날짜 선택시 오늘날짜 타일
  .react-calendar__tile--now {
    background-color: white;
    padding: 15px;
    border-radius: 50%;
    color: #303030;
    border: 1px solid #303030;
  }
  /* .react-calendar__tile--now:enabled:hover {
    background-color: #fff;
    padding: 15px;
    border-radius: 50%;
    color: #303030;
    border: 1px solid #303030;
  } */
  /* .react-calendar__tile--now:enabled:focus {
    background-color: red;
    padding: 15px;
    border-radius: 50%;
    color: #303030;
    border: 1px solid #303030;
  } */
  // 선택 날짜 tile
  .react-calendar__tile--active > abbr {
    /* position: relative; */
    display: inline-flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid orange;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
