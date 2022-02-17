import Messages from "./Messages";
import { connect } from 'react-redux';
import { addMsgAC, msgAreaChangedAC } from '../../redux/messages-reducer';

const mapStateToProps = (state) => {
  return {
    people: state.people,
    messages: state.messages,
    messageArea: state.messageArea,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMsg(text) {
      dispatch(addMsgAC(text));
    },
    msgAreaChangedAC(text) {
      dispatch(msgAreaChangedAC(text))
    }
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
