import Profile from './Profile';
import {
  addPostAC,
  msgChangedAC,
  imgUrlAC,
  likeAC,
  dislikeAC
} from '../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postMessage: state.profilePage.postMessage,
    imageUrl: state.profilePage.imageUrl,
    postsInfo: state.profilePage.postsInfo,
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
    },
    liked(id) {
      dispatch(likeAC(id))
    },
    disliked(id) {
      dispatch(dislikeAC(id))
    }
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
