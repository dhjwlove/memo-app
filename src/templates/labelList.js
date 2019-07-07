import React from "react";
import styled from "styled-components";

const width = 200;

const Wrapper = styled.div`
  display: table-cell;
  position: relative;
  width: ${width}px;
  height: 100%;
  border-right: 1px solid;
`;

const TotalMemoCnt = styled.div`
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

const AddLabelBtn = styled.button`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: ${width}px;
  height: 40px;
  background: #ffffff;
  border: 0px;
  border-top: 1px solid;
  cursor: pointer;
  :hover {
    background-color: gray;
  }
`;

const List = styled.div`
  overflow-y: scroll;
  margin-top: 40px;
  height: ${window.innerHeight - 80}px;
`;

const Label = styled(({ title, memos, className }) => (
  <div className={className}>
    <span>{`${title}(${memos.length})`}</span>
  </div>
))`
  width: 100%;
  height: 40px;
  display: table;
  border-bottom: 1px solid gray;
  span {
    display: table-cell;
    vertical-align: middle;
  }
`;

const LabelList = props => {
  const { totalMemoCnt = 0, isInitLabel, labelList = [], addLabel } = props;
  return (
    <Wrapper>
      <TotalMemoCnt>
        <span>{`전체메모(${totalMemoCnt})`}</span>
      </TotalMemoCnt>
      {isInitLabel && (
        <List>
          {labelList.map((list, idx) => (
            <Label key={idx} {...list} />
          ))}
        </List>
      )}
      <AddLabelBtn onClick={addLabel}>추가하기</AddLabelBtn>
    </Wrapper>
  );
};

export default LabelList;
