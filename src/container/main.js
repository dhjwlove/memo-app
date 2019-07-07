import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchMemos } from "../actions/action-memos";
import { fetchLabels, fetchAddLabel } from "../actions/action-label";
import LabelList from "../templates/labelList";
import MemoList from "../templates/memoList";
import MemoDetail from "../templates/memoDetail";

const Wrapper = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  min-width: 1280px;
  min-height: ${window.innerHeight}px;
  text-align: center;
`;

class Main extends React.Component {
  componentWillMount() {
    this.props.fetchMemos();
    this.props.fetchLabels({ populate: false });
  }

  addLabel = () => {
    this.props.fetchAddLabel({ title: "라벨제목" });
  };

  render() {
    const { totalMemoCnt, labelList, isInitLabel, match } = this.props;
    console.log("label-id", this.props.match.params.label_id);
    console.log("memo-id", this.props.match.params.memo_id);
    const selectedLabelId = match.params.label_id;
    const selectedMemoId = match.params.memo_id;
    return (
      <Wrapper>
        <LabelList
          totalMemoCnt={totalMemoCnt}
          isInitLabel={isInitLabel}
          labelList={labelList}
          addLabel={this.addLabel}
        />
        <MemoList />
        <MemoDetail />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  totalMemoCnt: state.memos.totalCnt,
  isInitLabel: state.labels.isInit,
  labelList: state.labels.labelList,
  labels: state.labels
});

const mapDispatchToPropsParam = {
  fetchMemos,
  fetchLabels,
  fetchAddLabel
};

export default connect(
  mapStateToProps,
  mapDispatchToPropsParam
)(Main);
