import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Header = styled.div<{ isSticky?: boolean }>`
  position: sticky;
  top: 0;
  background: white;

  ${({ isSticky }) => ({
    borderBottom: isSticky ? "1px solid black" : "none"
  })}
`;

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function listener() {
      setScrollY(document.body.getBoundingClientRect().top);
    }

    window.addEventListener("scroll", listener);
    return () => void window.removeEventListener("scroll", listener);
  });

  return scrollY;
};

export default function Page() {
  const scrollY = useScroll();
  return (
    <div>
      <Header isSticky={scrollY > 0}>Hello world</Header>

      {Array(100)
        .fill(0)
        .map((_, i) => (
          <div key={i}>Item {i}</div>
        ))}
    </div>
  );
}
