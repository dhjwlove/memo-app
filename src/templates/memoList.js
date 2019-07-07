import React from "react";
import styled from "styled-components";

const width = 320;

const Wrapper = styled.div`
  display: table-cell;
  position: relative;
  width: ${width}px;
  height: 100%;
  border-right: 1px solid;
`;

const LabelNameBox = styled.div`
  position: fixed;
  display: table;
  width: ${width}px;
  height: 40px;
  top: 0px;
  border-bottom: 1px solid;
  z-index: 1;
  background: #ffffff;
  span {
    display: table-cell;
    vertical-align: middle;
  }
`;

const MemoList = () => {
  return (
    <Wrapper>
      <LabelNameBox />
    </Wrapper>
  );
};

export default MemoList;
