import * as api from "../api/memo_api";

export const FETCH_MEMOS = "FETCH_MEMOS";
export const FETCH_ADD_MEMO = "FETCH_ADD_MEMO";
export const FETCH_GET_MEMO = "FETCH_GET_MEMO";
export const CLEAR_SLELCTED_MEMO = "CLEAR_SLELCTED_MEMO";
export const FETCH_UPDATE_MEMO = "FETCH_UPDATE_MEMO";
export const FETCH_DELETE_MEMO = "FETCH_DELETE_MEMO";
export const FETCH_CREATE_MEMO = "FETCH_CREATE_MEMO";

export const fetchMemos = () => dispatch => {
  api.getMemos().then(json => {
    dispatch({
      type: FETCH_MEMOS,
      arg: json
    });
  });
};

export const fetchAddMemo = id => dispatch => {
  api.AddMemo(id).then(json => {
    dispatch({
      type: FETCH_ADD_MEMO,
      arg: json
    });
  });
};

export const fetchGetMemo = id => dispatch => {
  api.getMemo(id).then(json => {
    dispatch({
      type: FETCH_GET_MEMO,
      arg: json
    });
  });
};

export function clearSelectedMemo() {
  return {
    type: CLEAR_SLELCTED_MEMO
  };
}

export const fetchUpdateMemo = (id, obj) => dispatch => {
  api.updateMemo(id, obj).then(json => {
    dispatch({
      type: FETCH_UPDATE_MEMO,
      arg: json
    });
  });
};

export const fetchDelMemo = id => dispatch => {
  api.delMemo(id).then(json => {
    dispatch({
      type: FETCH_DELETE_MEMO,
      arg: json
    });
  });
};

export const fetchCreateMemo = obj => dispatch => {
  api.createMemo(obj).then(json => {
    dispatch({
      type: FETCH_CREATE_MEMO,
      arg: json
    });
  });
};
