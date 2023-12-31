import car1 from 'assets/images/car.jpg';
import crossboard1 from 'assets/images/crossboard1.jpg';
import service1 from 'assets/images/service1.png';
import service2 from 'assets/images/service2.png';
import service3 from 'assets/images/service3.png';
import service4 from 'assets/images/service4.png';
import { motion } from 'framer-motion';

import {
  Crossboard1,
  Root,
  SecondContainer,
  SecondTypoContainer,
  SecondTypoFirst,
  SecondTypoSecond,
  ThirdContainer,
  ThirdTypoContainer,
  ThirdTypoText,
  ThirdTypoTop,
  TopTypoContainer,
  Car1,
  LandingContainer,
  ServicesContainer,
  ServicesRow,
  Service,
  ServiceImg,
  ServiceTypo,
  ServiceTypoTop,
  ServiceImgCar,
  ContactContainer,
  ContactTitle,
  TopTypoText,
  TopTypoMain,
  motionService,
  motionServiceContent,
  serviceImgAnimation,
} from './styled';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <Root>
      <Car1 src={car1} />

      <LandingContainer>
        <TopTypoContainer>
          <TopTypoMain>한테크 관제 플랫폼</TopTypoMain>
          <TopTypoText>we try to solve Children Safe Zone problem</TopTypoText>
        </TopTypoContainer>

        <SecondContainer>
          <Crossboard1 src={crossboard1} />
          <SecondTypoContainer>
            <SecondTypoFirst>아이들을 위한 안전한 환경을 고민합니다</SecondTypoFirst>
            <SecondTypoSecond>
              <p>어린이보호구역에서의 안전사고는 갈수록 늘어가고 있습니다.</p>
              <p>아이들의 안전은 저희 사회가 고려해야할 가장 우선적인 문제입니다</p>
              <p>아이들은 사회의 미래이자 희망입니다</p>
              <p>그렇기에 저희는 사회의 미래를 생각합니다.</p>
            </SecondTypoSecond>
          </SecondTypoContainer>
        </SecondContainer>

        {/* <img src={meeting5} className="meeting5"></img> */}
        <ThirdContainer>
          <ThirdTypoContainer>
            <ThirdTypoTop>한눈에 확인하기</ThirdTypoTop>
            <ThirdTypoText>어린이 보호구역의 안전</ThirdTypoText>
            <ThirdTypoText>저희 페이지에서 쉽게 확인하세요</ThirdTypoText>
          </ThirdTypoContainer>

          <ServicesContainer>
            <ServicesRow>
              <Service variants={motionService} initial="offScreen" whileInView="onScreen" viewport={{ once: true }}>
                <Link to="/main" className="Link">
                  <ServiceImg src={service1} variants={serviceImgAnimation} whileHover="hoverImg" />
                </Link>
                <ServiceTypoTop>안전도</ServiceTypoTop>
                <ServiceTypo>
                  어린이 보호구역의 안전도를
                  <br />
                  한눈에 쉽게 확인 할 수 있어요.
                </ServiceTypo>
                <Link to="/main" className="Link">
                  더 알아보기
                </Link>
              </Service>

              <Service variants={motionService} initial="offScreen" whileInView="onScreen" viewport={{ once: true }}>
                <Link to="/main" className="Link">
                  <ServiceImgCar src={service2} variants={serviceImgAnimation} whileHover="hoverImg" />
                </Link>
                <ServiceTypoTop>차량 정보 확인</ServiceTypoTop>
                <ServiceTypo>
                  어린이 보호구역의 차량정보를
                  <br />
                  다양한 시각화를 통해서 보여드려요.
                </ServiceTypo>
                <Link to="/main" className="Link">
                  더 알아보기
                </Link>
              </Service>
            </ServicesRow>

            <ServicesRow>
              <Service variants={motionService} initial="offScreen" whileInView="onScreen" viewport={{ once: true }}>
                <Link to="/main" className="Link">
                  <ServiceImg src={service3} variants={serviceImgAnimation} whileHover="hoverImg" />
                </Link>
                <ServiceTypoTop>어린이 구역 마커</ServiceTypoTop>
                <ServiceTypo>
                  지도에서 지정된 마커를 통해
                  <br />
                  어린이 보호구역의 위치를 확인하세요.
                </ServiceTypo>
                <Link to="/main" className="Link">
                  더 알아보기
                </Link>
              </Service>
              <Service variants={motionService} initial="offScreen" whileInView="onScreen" viewport={{ once: true }}>
                <Link to="/main" className="Link">
                  <ServiceImg src={service4} variants={serviceImgAnimation} whileHover="hoverImg" />
                </Link>
                <ServiceTypoTop>보행자 수</ServiceTypoTop>
                <ServiceTypo>
                  보행자 수를 통해서
                  <br />
                  현재 혼잡도를 확인하세요.
                </ServiceTypo>
                <Link to="/main" className="Link">
                  더 알아보기
                </Link>
              </Service>
            </ServicesRow>
          </ServicesContainer>
        </ThirdContainer>
      </LandingContainer>

      <ContactContainer>
        <ContactTitle variants={motionService} initial="offScreen" whileInView="onScreen" viewport={{ once: true }}>
          한테크에서는
          <br />
          안전을 위한 더욱 다양한 고민을 합니다
          <br />
          저희와 접촉하여 더 많은 제품과 서비스를 만나보세요
        </ContactTitle>
      </ContactContainer>
    </Root>
  );
};
