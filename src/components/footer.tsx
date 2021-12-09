import React from "react";
import { Text } from "@mantine/core";

function footer() {
  return (
    <footer className="footer">
      <div>
        <a href="/">
          <Text
            weight={500}
            style={{ fontSize: 24, color: "rgba(0, 0, 0, 0.4)" }}
          >
            @thth_ooo
          </Text>
        </a>
      </div>
      <nav className="bottom-nav">
        <li>
          <a href="https://axiomatic-brace-1c1.notion.site/b38af688452e4587808b60966a79a0fa">
            <Text>포트폴리오</Text>
          </a>
        </li>
        <li>
          <a href="https://programmers.co.kr/resumes/257712">
            <Text>이력서</Text>
          </a>
        </li>
        <li>
          <a href="https://github.com/ththdev?tab=repositories">
            <Text>깃허브</Text>
          </a>
        </li>
        <li>
          <a href="/contact">
            <Text>연락처</Text>
          </a>
        </li>
      </nav>
    </footer>
  );
}

export default footer;
