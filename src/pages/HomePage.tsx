import React from "react";
import { Text } from "@mantine/core";
import TechDog from "../Tech Life Dog.png";
import TextTransition from "react-text-transition";

const Texts = ["오늘보다 내일 더 나은", "추진력이 강한", "호기심이 많은"];

function HomePage() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="col-md-6">
        <Text className="hero-title" size="xl" weight={700}>
          <TextTransition
            text={Texts[index % Texts.length]}
            style={{ color: "#1c7ed6" }}
          />
          개발자 이태희 입니다
        </Text>
        <Text size="xl" style={{ marginTop: 30 }}>
          해당 페이지는 저를 소개하는 페이지입니다. <br /> 저에 대해
          궁금하시다면 아래의 컨텐츠를 둘러봐주세요. <br />
          <br />
          Let's See.
        </Text>
      </div>
      <img src={TechDog} alt="logo" className="centered-img" />
    </>
  );
}

export default HomePage;
