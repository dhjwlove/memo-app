import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  position: fixed;
  top: 0px;
  height: 40px;
  width: 100%;
  .title {
    font-size: 20px;
    width: 200px;
    height: 37px;
    border: 0px;
    position: absolute;
    left: 20px;
  }
  .date {
    position: absolute;
    line-height: 40px;
    left: 525px;
    width: 200px;
    height: 10px;
    font-size: 10px; 
  }
  .del-btn {
    position: absolute;
    left: 500px;
    width: 50px;
    height: 20px;
    top: 0px;
    bottom: 0px;
    margin auto;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
  }

  .complete-btn {
    position: absolute;
    left: 400px;
    width: 50px;
    height: 20px;
    top: 0px;
    bottom: 0px;
    margin auto;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  .text-cont {
    font-size: 15px;
    width: 100%;
    height: ${window.innerHeight - 60}px;
    border: 0px;
    resize: none;
    appearance: none;
  }
`;

class MemoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.selectedMemo &&
      nextProps.selectedMemo !== this.props.selectedMemo
    ) {
      this.setState({
        title: nextProps.selectedMemo.title,
        content: nextProps.selectedMemo.content
      });
    }
  }

  onChangehandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  onClickUpdateHandler = () => {
    const { selectedMemo, fetchUpdateMemo } = this.props;
    const obj = {
      title: this.state.title,
      content: this.state.content
    };
    const id = selectedMemo._id;
    fetchUpdateMemo(id, obj);
  };

  onClickDeleteHandler = () => {
    const { selectedMemo, fetchDelMemo } = this.props;
    const id = selectedMemo._id;
    fetchDelMemo(id);
  };

  render() {
    const { selectedMemo } = this.props;
    return (
      <Wrapper>
        {selectedMemo && (
          <div>
            <Header>
              <input
                name="title"
                className="title"
                value={this.state.title}
                onChange={this.onChangehandler}
              />
              <div className="complete-btn" onClick={this.onClickUpdateHandler}>
                완료
              </div>
              <div className="del-btn" onClick={this.onClickDeleteHandler}>
                삭제
              </div>
              <span className="date">{`최근 수정일 ${
                selectedMemo.updatedAt.split("T")[0]
              }`}</span>
            </Header>
            <Content>
              <textarea
                name="content"
                className="text-cont"
                value={this.state.content}
                onChange={this.onChangehandler}
              />
            </Content>
          </div>
        )}
      </Wrapper>
    );
  }
}

export default MemoDetail;
