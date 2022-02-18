import React from 'react';
import Posts from './Posts/Posts';
import st from './Profile.module.css';

const Profile = (props) => {
  const textarea = React.createRef();
  const addBtn = () => {
    if (textarea.current.value.length > 0) {
      props.addPost();
    } else {
      alert('input something first');
    }
  };

  const onMsgAreaChange = (e) => {
    const text = e.target.value;
    props.msgChanged(text);
  };

  const onImgAreaChange = (e) => {
    const imageUrl = e.target.value;
    props.imgUrl(imageUrl);
  };

  return (
    <div className={st.mainDiv}>
      <div className={st.inputAreas}>
        <div className={st.create_post}>
          <textarea
            className={st.textarea}
            cols="30"
            rows="10"
            placeholder="Input post's topic"
            value={props.postMessage}
            ref={textarea}
            onChange={onMsgAreaChange}
          ></textarea>

          <button
            className={st.btn}
            onClick={addBtn}
          >Add Post</button>
        </div>

        <div className={st.image_urlDiv}>
          <textarea
            className={st.textarea}
            cols="30"
            rows="4"
            value={props.imageUrl}
            onChange={onImgAreaChange}
          ></textarea>
        </div>
      </div>

      <div className={st.contentDiv}>
        <Posts
          postsInfo={props.postsInfo}
          liked={props.liked}
          unliked={props.unliked}
        />
      </div>
    </div>
  );
};

export default Profile;
