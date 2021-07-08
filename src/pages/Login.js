import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import { emailCheck } from "../shared/common";
import styled from "styled-components";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {

    console.log(id);

    if(id === "" || pwd === ""){
      window.alert("아이디 혹은 비밀번호를 입력해주세요!");
      return;
    }

    if(!emailCheck(id)){
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));

  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            is_submit
            onSubmit={login}
          />
        </Grid>
      </Grid >
      <LogButton>
      <Button 
        text="로그인하기"
        _onClick={() => {
          console.log("로그인 했어!");
          login();
        }}
      ></Button></LogButton>
    </React.Fragment>
  );
};

const LogButton = styled.div`
  margin-left: 55px;
`;

export default Login;
