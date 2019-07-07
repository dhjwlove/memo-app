export const FETCH_LABELS = "FETCH_LABELS";
export const FETCH_ADD_LABEL = "FETCH_ADD_LABEL";
import * as api from "../api/memo_api";

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
