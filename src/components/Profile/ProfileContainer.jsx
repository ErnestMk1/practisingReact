import Profile from './Profile';
import {
  addPostAC,
  msgChangedAC,
  imgUrlAC,
} from '../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postMessage: state.postMessage,
    imageUrl: state.imageUrl,
    postsInfo: state.postsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostAC());
    },
    msgChanged(text) {
      dispatch(msgChangedAC(text));
    },
    imgUrl(imageUrl) {
      dispatch(imgUrlAC(imageUrl));
    }
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
