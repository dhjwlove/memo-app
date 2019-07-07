import { FETCH_MEMOS } from "../actions/action-memos";

const intialState = {
  totalCnt: 0,
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
        totalCnt: action.arg.length,
        memoList: [...action.arg]
      };
    default:
      return state;
  }
}
