import React from 'react';
import st from './Messages.module.css';

const Messages = (props) => {
  const textarea = React.createRef();
  const onMsgAreaCh = (e) => {
    props.msgAreaChanged(e.target.value);
  };

  const onBtnClick = () => {
    const text = textarea.current.value;
    if (text.length > 0) {
      props.addMsg(text);
    } else {
      alert('here\'s should be smth');
    }
  }

  return (
    <div className={st.maindiv}>
      <div className={st.wrapper}>
        <div className={st.people}>
          {props.people.map((person) =>
          <div key={person.id} className={st.roja_name}>
            <h3 className={st.name}>{person.name}</h3>
            <img
              src={person.profileImg}
              alt="prof pic"
              className={st.profilePic}
            />
          </div>
          )}
        </div>

        <div className={st.msgsArea}>
          {props.messages.map((msg) =>
          <div key={msg.id}>
            <p className={st.msg}>{msg.msg}</p>
          </div>
          )}
        </div>
      </div>

      <div className={st.textarea_btn}>
        <textarea
            cols="30"
            rows="10"
            className={st.textarea}
            value={props.messageArea}
            onChange={onMsgAreaCh}
            ref={textarea}
            placeholder='input your message'
          ></textarea>

          <button
            className={st.sendBtn}
            onClick={onBtnClick}
          >Send</button>
      </div>
    </div>
  );
};

export default Messages;
