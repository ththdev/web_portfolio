import React from "react";
import { Text } from "@mantine/core";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <Text
            weight={500}
            style={{ fontSize: 24, color: "rgba(0, 0, 0, 0.4)" }}
          >
            @thth_ooo
          </Text>
        </Link>
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
          <Link to="/contact">
            <Text>연락처</Text>
          </Link>
        </li>
      </nav>
    </footer>
  );
}

export default footer;
