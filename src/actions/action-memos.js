import * as api from "../api/memo_api";

export const FETCH_MEMOS = "FETCH_MEMOS";

export const fetchMemos = () => dispatch => {
  api.getMemos().then(json => {
    dispatch({
      type: FETCH_MEMOS,
      arg: json
    });
  });
};
