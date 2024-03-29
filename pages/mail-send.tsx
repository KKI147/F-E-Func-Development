import * as yup from "yup";
import styled, { css } from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

interface CssType {
  height?: string;
}
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
            console.log(result);
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
    <>
      <Head>
        <title>Mail-send</title>
        <meta property="og:title" content="Mail-send" />
        <meta name="description" content="Mail-JS를 통한 mail문의하기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>

      <Wrapper>
        <TopSection
          skill={["Email-JS", "React Hook-Form"]}
          description={["이메일보내기 페이지"]}
          status={"개발완료"}
        />
        <SectionContainer>
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
              <InputBox height="150px">
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
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default MailSend;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;

const UseForm = styled.form`
  position: relative;
  width: 45%;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 16px;
`;

const Title = styled.div`
  margin: 12px 0 15px 0;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: #1d3763;
`;

const Section = styled.div`
  position: relative;
  margin: 50px auto 0;
`;

const LabelBox = styled.div`
  position: absolute;
  top: -10px;
  padding: 0 10px;
  background-color: #fff;
  color: #1d3763;
  z-index: 5;
  border: 0;
  outline: 0;
`;

const InputBox = styled.div<CssType>`
  position: relative;
  height: ${(props) => (props.height ? props.height : "46px")};
  margin: 10px auto 5px auto;
  padding: 5px 12px;
  border: 1px solid #dedede;
  border-radius: 6px;
  background-color: #fff;
  color: #1d3763;
`;

const InputForm = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  top: 2px;
  background-color: #fff;
  border: 0;
  outline: 0;
  color: #1d3763;

  ::placeholder {
    font-size: 14px;
    padding: 0 0 0 8px;
  }
`;

const BtnBox = styled.div`
  position: relative;
  margin: 50px auto 0;
`;

const Btn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #379fff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
`;

const Message = styled.div`
  position: relative;
  color: #ff0000;
`;
