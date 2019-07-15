import {
  FETCH_MEMOS,
  FETCH_GET_MEMO,
  CLEAR_SLELCTED_MEMO,
  FETCH_UPDATE_MEMO,
  FETCH_DELETE_MEMO,
  FETCH_CREATE_MEMO
} from "../actions/action-memos";

const intialState = {
  isInit: false,
  totalCnt: 0,
  selectedMemo: undefined,
  updatedAt: undefined,
  memoList: [
    {
      _id: undefined,
      updatedAt: undefined,
      createAt: undefined,
      title: undefined,
      content: undefined
    }
  ]
};

export default function(state = intialState, action) {
  switch (action.type) {
    case FETCH_MEMOS:
      return {
        ...state,
        isInit: true,
        totalCnt: action.arg.length,
        memoList: [...action.arg]
      };
    case FETCH_GET_MEMO:
      state["selectedMemo"] = action.arg;
      return {
        ...state
        // selectedMemo: action.arg
      };
    case CLEAR_SLELCTED_MEMO:
      return {
        ...state,
        selectedMemo: undefined
      };
    case FETCH_UPDATE_MEMO:
      const update_idx = state.memoList.findIndex(function(item) {
        return item["_id"] === action.arg["_id"];
      });
      state["updatedAt"] = action.arg.updatedAt;
      state.memoList[update_idx].title = action.arg.title;
      state.memoList[update_idx].content = action.arg.content;
      return {
        ...state
      };
    case FETCH_DELETE_MEMO:
      const idx = state.memoList.findIndex(function(item) {
        return item["_id"] === action.arg["_id"];
      });
      state.memoList.splice(idx, 1);
      return {
        ...state,
        totalCnt: state.totalCnt - 1,
        memoList: [...state.memoList]
      };
    case FETCH_CREATE_MEMO:
      return {
        ...state,
        totalCnt: state.totalCnt + 1,
        memoList: [...state.memoList, action.arg]
      };
    default:
      return state;
  }
}
