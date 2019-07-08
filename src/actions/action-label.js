import * as api from "../api/memo_api";

export const FETCH_LABELS = "FETCH_LABELS";
export const FETCH_ADD_LABEL = "FETCH_ADD_LABEL";
export const FETCH_GET_LABEL = "FETCH_GET_LABEL";
export const FETCH_DELETE_LABEL = "FETCH_DELETE_LABEL";

export const fetchLabels = obj => dispatch => {
  api.getLabels(obj).then(json => {
    dispatch({
      type: FETCH_LABELS,
      arg: json
    });
  });
};

export const fetchAddLabel = obj => dispatch => {
  api.AddLabel(obj).then(json => {
    dispatch({
      type: FETCH_ADD_LABEL,
      arg: json
    });
  });
};

export const fetchGetLabel = id => dispatch => {
  api.getLabel(id).then(json => {
    dispatch({
      type: FETCH_GET_LABEL,
      arg: json
    });
  });
};

export const fetchUpdateLabel = obj => dispatch => {
  api.updateLabel(id, obj).then(json => {
    dispatch({
      type: FETCH_UPDATE_LABEL,
      arg: json
    });
  });
};

export const fetchDelLabel = obj => dispatch => {
  api.delLabel(id, obj).then(json => {
    dispatch({
      type: FETCH_DELETE_LABEL,
      arg: json
    });
  });
};
