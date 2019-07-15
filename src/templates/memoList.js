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
  .title {
    width: 130px;
    display: table-cell;
    vertical-align: middle;
  }
  .configure-btn {
    display: table-cell;
    vertical-align: middle;
    span {
      border: 1px solid gray;
      border-radius: 3px;
      font-size: 13px;
    }
  }
`;

const List = styled.div`
  position: absolute;
  top: 40px;
`;
const Memo = styled.div`
  width: ${width}px;
  height: 60px;
  display: table;
  border-bottom: 1px solid;
  .chkbox {
    width: 40px;
    display: table-cell;
    vertical-align: middle;
  }
  .title-box {
    display: table-cell;
    text-align: left;
    vertical-align: middle;
  }
  .content {
    width: 155px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
  }
  .date-box {
    width: 125px;
    display: table-cell;
    vertical-align: middle;
  }
`;

const NoNote = styled.div`
  position: absolute;
  height: 30px;
  width: ${width}px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  text-align: center;
`;

const MemoList = props => {
  const {
    memoList,
    selectedLabel,
    isInitMemos,
    isShowLabelMemos,
    history
  } = props;

  const MemoBox = ({ memo, onClick }) => (
    <Memo onClick={onClick}>
      <div className="chkbox">
        <input type="checkbox" />
      </div>
      <div className="title-box">
        <div>{memo.title}</div>
        <div className="content">{memo.content}</div>
      </div>
      <div className="date-box">
        {memo.updatedAt && memo.updatedAt.split("T")[0]}
      </div>
    </Memo>
  );

  return (
    <Wrapper>
      {console.log("memoList rendering")}
      {console.log(memoList)}

      <LabelNameBox>
        <div className="title">{isShowLabelMemos && selectedLabel.title}</div>
        <div className="configure-btn">
          <span>이름변경</span>
        </div>
        <div className="configure-btn">
          <span>설정</span>
        </div>
        <div className="configure-btn">
          <span>삭제</span>
        </div>
      </LabelNameBox>

      {/* 전체 메모 리스트 */}
      {!isShowLabelMemos && isInitMemos && (
        <div>
          {console.log("render Inner function")}
          {memoList.length > 0 ? (
            <List>
              {memoList.map((memo, idx) => (
                <MemoBox
                  key={idx}
                  memo={memo}
                  onClick={() => history.push(`/memo/${memo._id}`)}
                />
              ))}
            </List>
          ) : (
            <NoNote>No Notes</NoNote>
          )}
        </div>
      )}

      {/* 선택된 라벨에 해당하는 메모리스트 */}
      {isShowLabelMemos && selectedLabel.title && (
        <div>
          {selectedLabel.memos.length > 0 ? (
            <List>
              {selectedLabel.memos.map((memo, idx) => (
                <MemoBox
                  key={idx}
                  memo={memo}
                  onClick={() => history.push(`/memo/${memo._id}`)}
                />
              ))}
            </List>
          ) : (
            <NoNote>No Notes</NoNote>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default MemoList;
