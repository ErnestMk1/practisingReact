import st from './Posts.module.css';

const Posts = (props) => {
  return (
    props.postsInfo.map((post) => <div key={post.id} className={st.mainDiv}>
        <div className={st.imageDiv}>
          <img
            src={post.image}
            alt="post pic"
            className={st.postImage}
          />
        </div>

        <div className={st.postContent}>
          <p>Theme: {post.topic}</p>
          <h3>Likes: {post.likesCounter}</h3>

          {post.liked ? <button className={st.likeBtn} onClick={() => {props.unliked(post.id)}}>Unlike</button> : <button className={st.likeBtn} onClick={() => {props.liked(post.id)}}>Like!)</button>}
        </div>
      </div>
    )
  );
};

export default Posts;
