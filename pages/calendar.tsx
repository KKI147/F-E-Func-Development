import styled from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";
import React, { useState, useEffect } from "react";
import { StCalendar, CustomerCalendar } from "@/component/CalendarCss";
import moment from "moment";

export const CalendarComponent = () => {
  const [value, setValue] = useState<any>(new Date());
  const [mark, setMark] = useState(["2023-04-01", "2023-04-02", "2023-04-03"]);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(moment(value).format("YYYY-MM-DD"));
  const [todoList, setTodoList] = useState([{}]);

  const onClickHandler = () => {
    // setTodo({ today, todo });

    const data = { a: moment(value).format("YYYY-MM-DD"), b: todo };

    setTodoList((prev) => [...prev, data]);
    console.log(todoList);
  };

  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta property="og:title" content="Calendar" />
        <meta name="description" content="React Calenar을 통한 일정추가" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>
      <Wrapper>
        <TopSection skill={[]} description={[]} status={"개발예정"} />
        <SectionContainer>
          <FlexWrapper>
            <CustomerCalendar>
              <StCalendar
                onChange={setValue}
                value={value}
                formatDay={(locale, date) => moment(date).format("DD")}
                calendarType="US"
                tileContent={({ date, view }) => {
                  if (
                    mark.find((x) => x === moment(date).format("YYYY-MM-DD"))
                  ) {
                    return (
                      <div className="flex justify-center items-center absoluteDiv">
                        <Dot className="dot"></Dot>
                      </div>
                    );
                  }
                }}
              />
            </CustomerCalendar>
            <Schedule>
              <div> {moment(value).format("YYYY년 MM월 DD일")} </div>
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button onClick={onClickHandler}>등록</button>
              <div></div>
            </Schedule>
          </FlexWrapper>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default CalendarComponent;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FlexWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Schedule = styled.div`
  position: relative;
  width: calc(20% - 20px);
  margin: 0 0 0 20px;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: orange;
`;
