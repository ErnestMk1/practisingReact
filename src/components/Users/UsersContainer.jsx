import { connect } from "react-redux";
import Users from "./Users";
import { unfollowAC, followAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow() {
      dispatch(followAC());
    },
    unfollow() {
      dispatch(unfollowAC());
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
