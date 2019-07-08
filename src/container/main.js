import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";

import {
  fetchMemos,
  fetchAddMemo,
  fetchGetMemo,
  clearSelectedMemo,
  fetchUpdateMemo,
  fetchDelMemo,
  fetchCreateMemo
} from "../actions/action-memos";
import {
  fetchLabels,
  fetchAddLabel,
  fetchGetLabel
} from "../actions/action-label";
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
  constructor(props) {
    super(props);
    this.state = {
      isShowLabelMemos: false
    };
  }
  componentWillMount() {
    this.props.fetchMemos();
    this.props.fetchLabels({ populate: false });

    // 첫 로딩 시 labelId가 있으면 해당 라벨 정보 로드
    const selectedLabelId = this.props.match.params.label_id;
    selectedLabelId && this.onClickLabelItem(selectedLabelId);

    // 첫 로딩 시 memoId가 있으면 해당 메모 정보 로드
    const selectedMemoId = this.props.match.params.memo_id;
    selectedMemoId && this.props.fetchGetMemo(selectedMemoId);
  }

  componentWillReceiveProps(nextProps) {
    const selectedLabelId = this.props.match.params.label_id;
    const selectedMemoId = this.props.match.params.memo_id;
    const nextSelectedLabelId = nextProps.match.params.label_id;
    const nextSelectedMemoId = nextProps.match.params.memo_id;
    if (nextSelectedLabelId && nextSelectedLabelId !== selectedLabelId) {
      this.props.clearSelectedMemo();
      return this.onClickLabelItem(nextProps.match.params.label_id);
    }
    if (nextSelectedMemoId && nextSelectedMemoId !== selectedMemoId) {
      return this.props.fetchGetMemo(nextProps.match.params.memo_id);
    }

    if (nextProps.match.path === "/")
      return this.setState({ isShowLabelMemos: false });
  }

  addLabel = () => {
    this.props.fetchAddLabel({ title: "라벨제목" });
  };

  onClickLabelItem = id => {
    this.setState({ isShowLabelMemos: true });
    this.props.fetchGetLabel(id);
  };

  render() {
    const {
      totalMemoCnt,
      labelList,
      isInitLabel,
      selectedLabel,
      fetchAddMemo,
      memoList,
      isInitMemos,
      selectedMemo,
      history,
      fetchUpdateMemo,
      fetchDelMemo,
      fetchCreateMemo
    } = this.props;
    return (
      <Wrapper>
        <LabelList
          history={history}
          totalMemoCnt={totalMemoCnt}
          isInitLabel={isInitLabel}
          labelList={labelList}
          addLabel={this.addLabel}
          fetchCreateMemo={fetchCreateMemo}
        />
        <MemoList
          history={history}
          isShowLabelMemos={this.state.isShowLabelMemos}
          isInitMemos={isInitMemos}
          memoList={memoList}
          selectedLabel={selectedLabel}
          fetchAddMemo={fetchAddMemo}
        />
        <MemoDetail
          selectedMemo={selectedMemo}
          fetchUpdateMemo={fetchUpdateMemo}
          fetchDelMemo={fetchDelMemo}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  memoList: state.memos.memoList,
  totalMemoCnt: state.memos.totalCnt,
  isInitMemos: state.memos.isInit,
  isInitLabel: state.labels.isInit,
  labelList: state.labels.labelList,
  labels: state.labels,
  selectedLabel: state.labels.selectedLabel,
  selectedMemo: state.memos.selectedMemo
});

const mapDispatchToPropsParam = {
  fetchMemos,
  fetchLabels,
  fetchAddLabel,
  fetchGetLabel,
  fetchAddMemo,
  fetchGetMemo,
  clearSelectedMemo,
  fetchUpdateMemo,
  fetchDelMemo,
  fetchCreateMemo
};

export default connect(
  mapStateToProps,
  mapDispatchToPropsParam
)(withRouter(Main));
