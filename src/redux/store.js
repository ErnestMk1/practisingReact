import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import proflieReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const state = combineReducers({
  messagesPage: messagesReducer,
  profilePage: proflieReducer,
  usersPage: usersReducer,
});
const store = createStore(state);

export default store;
