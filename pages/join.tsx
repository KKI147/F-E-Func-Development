import * as yup from "yup";
import styled, { css } from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { post } from "../module/Api";
import Image from "next/image";

interface CssType {
  variant: string;
}

export const Join = () => {
  interface FormTypes {
    email: string;
    password: string;
  }
  interface PropsTypes {
    skill: string[];
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
    watch,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(validation),
  });

  const onSubmitHandler = (data: FormTypes) => {
    post("/api/join", data);

    const id = data.email;
    const password = data.password;

    localStorage.setItem("ID", id);
    localStorage.setItem("password", password);
    if (localStorage.setItem !== null) {
      alert("회원가입 완료");
      reset();
    } else {
      alert("회원가입을 다시해주세요");
    }
  };

  return (
    <>
      <Head>
        <title>Join</title>
        <meta property="og:title" content="Join" />
        <meta name="description" content="React Form을 통한 Join기능" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>
      <Wrapper>
        <TopSection
          skill={["Axios", "React Hook-Form"]}
          description={["회원가입 페이지"]}
          status={"개발완료"}
        />
        <SectionContainer>
          <UseForm onSubmit={handleSubmit(onSubmitHandler)}>
            <Title>회원가입</Title>
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
              <JoinButton type="submit">회원가입</JoinButton>
            </BtnBox>
            <Line />
            <BtnBox>
              <SocialButton variant="google" type="button">
                <ImageBox>
                  <Image
                    src={"/images/google.png"}
                    width={18}
                    height={18}
                    alt="image"
                    loading="lazy"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </ImageBox>
                <ButtonText
                  onClick={() => window.alert("개발되지 않은 기능입니다.")}
                >
                  구글 계정으로 회원가입
                </ButtonText>
              </SocialButton>
            </BtnBox>
            <BtnBox>
              <SocialButton variant="kakao" type="button">
                <ImageBox>
                  <Image
                    src={"/images/kakao.png"}
                    width={18}
                    height={18}
                    alt="image"
                    loading="lazy"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </ImageBox>
                <ButtonText
                  onClick={() => window.alert("개발되지 않은 기능입니다.")}
                >
                  카카오톡 계정으로 회원가입
                </ButtonText>
              </SocialButton>
            </BtnBox>
            <BtnBox>
              <SocialButton variant="naver" type="button">
                <ImageBox>
                  <Image
                    src={"/images/naver.png"}
                    width={18}
                    height={18}
                    alt="image"
                    loading="lazy"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </ImageBox>
                <ButtonText
                  onClick={() => window.alert("개발되지 않은 기능입니다.")}
                >
                  네이버 계정으로 회원가입
                </ButtonText>
              </SocialButton>
            </BtnBox>
          </UseForm>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default Join;

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
const InputBox = styled.div`
  position: relative;
  height: 46px;
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
    padding: 0 0 0 2px;
  }
`;

const Section = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto 20px auto;
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
const Message = styled.div`
  position: relative;
  color: #ff0000;
`;

const BtnBox = styled.div`
  position: relative;
  width: 70%;
  margin: 20px auto;
`;

const JoinButton = styled.button`
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
const ButtonText = styled.div`
  font-size: 16px;
  color: #2c2c2c;
  font-weight: bold;
`;
const ImageBox = styled.div`
  position: absolute;
  left: 20px;
`;

const SocialButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  ${({ variant }: CssType) => {
    switch (variant) {
      case "google":
        return css`
          background-color: #fff;
          border: 1px solid #cecece;
        `;
      case "kakao":
        return css`
          background-color: #ffe812;
          color: #2c2c2c;
          border: 0;
        `;
      case "naver":
        return css`
          background-color: #03c75a;
          color: #fff;
          border: 0;
        `;
      default:
        break;
    }
  }}
`;

const Line = styled.div`
  width: 70%;
  height: 0;
  border-top: 1px solid #cdcdcd;
  margin: 20px auto;
  text-align: center;
  ::before {
    position: relative;
    content: "또는";
    font-weight: 500;
    background-color: #ffffff;
    color: #1d3763;
    padding: 0 16px;
    top: -10px;
  }
`;
