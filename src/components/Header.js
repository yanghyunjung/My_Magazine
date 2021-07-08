import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";
import Permit from "../shared/Permit";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

import NotiBadge from "./NotiBadge";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <Permit>
        <React.Fragment>
          <Grid is_flex padding="4px 16px">
            <Grid>
              <Button size="24px" bold _onClick={() => {
                history.push("/");
              }}>
                The Magazine
              </Button>
            </Grid>

            <Grid is_flex>
              <Button text="내정보"></Button>
              <NotiBadge _onClick={() => {
                history.push("/noti");
              }}/>
              <Button
                text="로그아웃"
                _onClick={() => {
                  dispatch(userActions.logoutFB());
                }}
              ></Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </Permit>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Button margin="0px" size="24px" bold>
          The Magazine
          </Button>
        </Grid>

        <Grid is_flex>
          <Button 
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button margin="0px 0px 0px 10px"
            text="회원가입"
            _onClick={() => {
              history.push("./signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
