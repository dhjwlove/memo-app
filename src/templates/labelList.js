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
  .new-memo {
    margin-top: 12px;
    height: 17px;
    width: 42px;
    font-size: 11px;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
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
  position: absolute;
  height: ${window.innerHeight - 80}px;
  width: 100%;
  overflow-y: scroll;
  margin-top: 40px;
`;

const Label = styled(({ title, memos, className, onClick }) => (
  <div className={className} onClick={onClick}>
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
  const {
    totalMemoCnt = 0,
    isInitLabel,
    labelList = [],
    addLabel,
    history,
    fetchCreateMemo
  } = props;

  const onClickNewMemoBtn = () => {
    const obj = {
      title: "새메모",
      content: ""
    };
    fetchCreateMemo(obj);
  };

  return (
    <Wrapper>
      <TotalMemoCnt onClick={() => history.push("/")}>
        <span>{`전체메모(${totalMemoCnt})`}</span>
        <div className="new-memo" onClick={onClickNewMemoBtn}>{`새메모`}</div>
      </TotalMemoCnt>
      {isInitLabel && (
        <List>
          {labelList.map((item, idx) => (
            <Label
              key={idx}
              onClick={() => history.push(`/label/${item._id}`)}
              {...item}
            />
          ))}
        </List>
      )}
      <AddLabelBtn onClick={addLabel}>추가하기</AddLabelBtn>
    </Wrapper>
  );
};

export default LabelList;
