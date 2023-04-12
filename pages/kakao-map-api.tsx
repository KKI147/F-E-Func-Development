import styled, { css } from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";

export const KakaoMapApi = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  return (
    <>
      <Head>
        <title>Kakao-Map-Api</title>
        <meta property="og:title" content="Kakao-Map-Api" />
        <meta name="description" content="Kakao-Map-Api를 통한 좌표값 확인" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>
      <Wrapper>
        <TopSection
          skill={["Kakao-Map-Api"]}
          description={[
            "카카오 맵",
            "클릭한 위치의 위도는 " +
              position.lat +
              " 이고, 경도는 " +
              position.lng +
              " 입니다",
          ]}
          status={"개발완료"}
        />
        <SectionContainer padding={"0px"}>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: 37.566826,
              lng: 126.9786567,
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
            }}
            level={3} // 지도의 확대 레벨
            onClick={(_t, mouseEvent) =>
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              })
            }
          >
            {position && <MapMarker position={position} />}
          </Map>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default KakaoMapApi;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
