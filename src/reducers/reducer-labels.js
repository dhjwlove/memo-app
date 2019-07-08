import {
  FETCH_LABELS,
  FETCH_ADD_LABEL,
  FETCH_GET_LABEL
} from "../actions/action-label";

const initialState = {
  isLabelListInit: false,
  selectedLabel: {
    _id: undefined,
    updatedAt: undefined,
    createAt: undefined,
    title: undefined,
    memos: [
      {
        _id: undefined,
        updatedAt: undefined,
        createAt: undefined,
        title: undefined,
        content: undefined
      }
    ]
  },
  labelList: [
    {
      _id: undefined,
      updatedAt: undefined,
      createAt: undefined,
      title: undefined,
      memos: [
        {
          _id: undefined,
          updatedAt: undefined,
          createAt: undefined,
          title: undefined,
          content: undefined
        }
      ]
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LABELS:
      return {
        ...state,
        isInit: true,
        labelList: action.arg
      };
    case FETCH_ADD_LABEL:
      return {
        ...state,
        labelList: [...state.labelList, action.arg]
      };
    case FETCH_GET_LABEL:
      return {
        ...state,
        selectedLabel: { ...action.arg }
      };
    default:
      return state;
  }
}
