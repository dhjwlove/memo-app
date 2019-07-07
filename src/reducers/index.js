import { combineReducers } from "redux";
import labels from "./reducer-labels";
import memos from "./reducer-memos";

export default combineReducers({ labels, memos });
