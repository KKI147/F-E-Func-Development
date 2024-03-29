import styled from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import uuid from "react-uuid";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

interface JsonProps {
  [key: string]: string | number;
}

export const Paging = () => {
  const [data, setData] = useState<JsonProps[]>([]);
  const target = useRef<any>(null);

  //useEffect 렌더링 문제 비구조할당 스프래드 연산자 얕은복사 깊은복사
  const dataFetch = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
    ).json();

    setData((prev) => [...prev, ...results]);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  useEffect(() => {
    if (data) {
      // data가 존재하면
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dataFetch();
        }
      });

      // 옵져버 탐색 시작
      if (target.current) {
        observer.observe(target.current);
      }
      return () => {
        observer && observer.disconnect();
      };
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Intersection-Observer</title>
        <meta property="og:title" content="Intersection-Observer" />
        <meta
          name="description"
          content="Intersection-Observer API를 통한 무한스크롤"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>

      <Wrapper>
        <TopSection
          skill={["WEB-API", "Intersection-Observer", "UUID"]}
          description={[
            "Intersection-Observer를 통해 관찰자 객체를 생성한후 교차점을 관찰하여 요소가 뷰포트에 포함되면\n콜백함수를 이용하여 infinite scroll를 생성합니다.",
          ]}
          status={"개발완료"}
        />

        <SectionContainer>
          <Container>
            {data && data.length > 0
              ? data.map((movie: JsonProps, index: number) => {
                  return (
                    <div key={uuid()}>
                      <ImageBox>
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="image"
                          loading="lazy"
                          unoptimized={true}
                          layout="fill"
                          style={{}}
                        />

                        <Title
                          ref={
                            movie.original_title ===
                            "Money Shot: The Pornhub Story"
                              ? target
                              : null
                          }
                        >
                          {movie.original_title}
                        </Title>
                      </ImageBox>
                    </div>
                  );
                })
              : null}
          </Container>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default Paging;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;

// export async function getServerSideProps(context: any) {
//   const { results } = await (
//     await fetch(`https://localhost:3000/api/movies`)
//   ).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: -30px;
  font-size: 12px;
`;

const ImageBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 20px 50px;
`;
