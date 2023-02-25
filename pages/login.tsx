import TopSection from "@/component/TopSection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { post } from "../module/Api";

export const Login = () => {
  const [id, setId] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();

  useEffect(() => {
    if (localStorage !== null) {
      console.log(localStorage);

      setId(localStorage.getItem("ID"));
      setPassword(localStorage.getItem("password"));
    }
  }, []);

  interface FormTypes {
    email: string;
    password: string;
  }
  interface PropsTypes {
    skill: string;
    description: string;
    status: string;
  }

  const validation = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .matches(/\S+@\S+\.\S+/, "이메일 형식을 확인해주세요."),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .min(6, "비밀번호는 6자리 이상입니다."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(validation),
  });

  const onSubmitHandler = (data: FormTypes) => {
    post("/join", data);
    console.log(data.email);
    if (data.email === id && data.password === password) {
      alert("로그인 완료");
      reset();
    } else {
      alert("이메일과 비밀번호를 확인하세요");
    }
  };

  return (
    <Wrapper>
      <TopSection
        skill={["Axios", "React Hook-Form"]}
        description={"로그인 페이지"}
        status={"개발완료"}
      />
      <Container>
        <UseForm onSubmit={handleSubmit(onSubmitHandler)}>
          <Title>로그인</Title>
          <Section>
            <LabelBox>
              <label htmlFor="email">이메일</label>
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
              <label htmlFor="password">비밀번호</label>
            </LabelBox>
            <InputBox>
              <InputForm
                {...register("password")}
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </InputBox>
            {errors.password && <Message>{errors.password.message}</Message>}
          </Section>
          <BtnBox>
            <Btn type="submit">회원가입</Btn>
          </BtnBox>
        </UseForm>
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  position: relative;
  width: calc(100% - 15px);
  height: 100%;
  margin: 0 0 0 15px;
`;
const Container = styled.div`
  position: relative;
  width: calc(100% - 15px);
  height: calc(80vh - 30px);
  margin: 10px 15px 20px 0;
  padding: 25px;
  background-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
`;

const UseForm = styled.form`
  position: relative;
  width: 50%;
  height: 80%;
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
  ::placeholder {
    font-size: 14px;
    font-weight: bold;
  }
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
