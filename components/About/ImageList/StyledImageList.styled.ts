import styled from "styled-components";

const StyledImageList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5vh;

  img {
    width: 100%;
    display: block;
    height: 100%;
  }
  li {
    height: 12vw;
  }
  &.top {
    li:nth-child(3n) {
      flex-basis: calc((100% - 1vh) / 2);
    }
    li {
      flex-basis: calc((100% - 1vh) / 4);
    }
  }

  &.bottom {
    margin-top: 10vh;

    li:nth-child(2n + 1) {
      flex-basis: calc((100% - 1vh) / 4);
      margin-right: auto;
    }

    li:nth-child(2n) {
      flex-basis: calc((100% - 1vh) / 2);
    }

    li:nth-child(3n) > img {
      height: calc(200% + 0.5vh);
    }
  }
`;

export default StyledImageList;
