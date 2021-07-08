import React from "react";
import { Grid, Image, Text, Button } from "../elements"; //index.js 에 임포트 묶어놓음~
import { history } from "../redux/configureStore";
import { HeartButton } from "./index";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import styled from "styled-components";
const Post = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Box2 is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Box2>
          <Box2>
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <>
                <Button
                  width="50px"
                  margin="4px"
                  padding="4px"
                  _onClick={() => {
                    history.push(`/write/${props.id}`); // 리액트에서 페이지를 이동할 수 있는 이유는 react-router-dom을 이용하여 페이지의 기록을 알 수 있기 때문!
                  }}
                >
                  수정
                </Button>
                <Button
                  width="50px"
                  margin="4px"
                  padding="4px"
                  _onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // 게시글 삭제하기
                    // 여기에서는 window.confirm 등을 사용해서 진짜 지우냐고 한 번 더 물어봐주면 정말 좋겠죠!
                    dispatch(postActions.deletePostFB(props.id));
                    window.confirm("삭제 되었습니다");
                  }}
                >
                  삭제
                </Button>
              </>
            )}
          </Box2>
        </Grid>

        {/* layout type이 a일 때 */}
        {props.layout_type === "a" && (
          <React.Fragment>
            <Grid padding="16px">
              <Text>{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </React.Fragment>
        )}

        {/* layout type이 b일 때 */}
        {props.layout_type === "b" && (
          <React.Fragment>
            <Grid is_flex>
              <Grid width="50%" padding="16px">
                <Text>{props.contents}</Text>
              </Grid>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </React.Fragment>
        )}

        {/* layout type이 c일 때 */}
        {props.layout_type === "c" && (
          <React.Fragment>
            <Grid is_flex>
              <Image shape="rectangle" src={props.image_url} />
              <Grid width="50%" padding="16px">
                <Text>{props.contents}</Text>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
      <Grid is_flex padding="16px">
        <Text margin="0px" bold>
          좋아요 {props.like_cnt}개 댓글 {props.comment_cnt}개
        </Text>

        <HeartButton
          _onClick={(e) => {
            //  이벤트 캡쳐링과 버블링을 막아요!
            // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
            e.preventDefault();
            e.stopPropagation();
            dispatch(postActions.toggleLikeFB(props.id));
          }}
          is_like={props.is_like}
        ></HeartButton>
      </Grid>
    </React.Fragment>
  );
};

const Box2 = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

Post.defaultProps = {
  user_info: {
    user_name: "zzeong",
    user_profile: "https://hyunjung.s3.ap-northeast-2.amazonaws.com/hj.jpeg",
  },
  image_url: "https://hyunjung.s3.ap-northeast-2.amazonaws.com/hj.jpeg",
  contents: "Y Magazine",
  comment_cnt: 10,
  like_cnt: 10,
  layout_type: "a",
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
  is_like: false,
};

export default Post;
