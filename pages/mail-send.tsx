import TopSection from "@/component/TopSection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export const MailSend = () => {
  const formRef = useRef<HTMLFormElement>(null);

  interface FormTypes {
    email: string;
    content: string;
  }
  const validation = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .matches(/\S+@\S+\.\S+/, "이메일 형식을 확인해주세요."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(validation),
  });

  const onSubmit = () => {
    sendMail();
  };

  const sendMail = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_8l2ucht",
          "template_7iei7n6",
          formRef.current,
          "3_qeOfICkOCKAXLXS"
        )
        .then(
          (result) => {
            alert("이메일이 발송되었습니다.");
            reset();
          },
          (error) => {
            alert("이메일을 다시보내주세요");
          }
        );
    }
  };

  return (
    <Wrapper>
      <TopSection
        skill={["Email-JS", "React Hook-Form"]}
        description={"이메일보내기 페이지"}
        status={"개발완료"}
      />
      <Container>
        <UseForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <Title>문의 하기</Title>
          <Section>
            <LabelBox>
              <label htmlFor="email">수신받을 이메일</label>
            </LabelBox>
            <InputBox>
              <InputForm
                {...register("email")}
                id="email"
                name="email"
                placeholder="이메일을 입력해주세요"
              />
            </InputBox>
            {errors.email && <Message>{errors.email.message}</Message>}
          </Section>
          <Section>
            <LabelBox>
              <label htmlFor="content">내용</label>
            </LabelBox>
            <InputBox>
              <InputForm
                {...register("content")}
                id="content"
                name="content"
                placeholder="내용을 입력해주세요"
              />
            </InputBox>
          </Section>
          <BtnBox>
            <Btn type="submit">문의 하기</Btn>
          </BtnBox>
        </UseForm>
      </Container>
    </Wrapper>
  );
};

export default MailSend;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
const Container = styled.div`
  position: relative;
  height: calc(75% - 25px);
  margin: 24px 0 0 0;
  padding: 25px;
  background-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
`;

const UseForm = styled.form`
  position: relative;
  width: 60%;
  background-color: #333333;
  margin: 20px auto;
  padding: 40px 0;
  border-radius: 16px;
`;

const Title = styled.div`
  margin: 12px 0 45px 0;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: #fff;
`;

const InputBox = styled.div`
  position: relative;
  width: 70%;
  height: 50px;
  margin: 0 auto 25px auto;
  padding: 5px 12px;
  border: 1px solid #fff;
  border-radius: 6px;
  background-color: #333333;
  color: #fff;
`;
const InputForm = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333333;
  border: 0;
  outline: 0;
  color: #fff;
`;

const BtnBox = styled.div`
  position: relative;
  width: 75%;
  margin: 25px auto 25px auto;
`;
const Btn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #fff;
  color: #333333;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #9a9a9a;
  }
`;

const Section = styled.div`
  position: relative;
  margin: 0 0 40px 0;
`;
const LabelBox = styled.div`
  position: absolute;
  top: -10px;
  left: 110px;
  padding: 0 10px;
  background-color: #333333;
  color: #fff;
  z-index: 5;
  border: 0;
  outline: 0;
`;
const Message = styled.div`
  position: relative;
  left: 110px;
  color: #ff0000;
  margin: 25px 0;
`;
