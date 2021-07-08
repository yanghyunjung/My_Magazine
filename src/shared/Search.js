import React from "react";
import _ from "lodash";

const Search = () => {

  const [text, setText] = React.useState("");

  // 일정 시간이 지난 후에 뜬다.
  const debounce = _.debounce((e) => {
    console.log("debounce :::", e.target.value);
  }, 1000);

  const throttle = _.throttle((e) => {
    console.log("throttle :::", e.target.value);
  }, 1000);
  
  const keyPress = React.useCallback(debounce, [text]);

  const onChange = (e) => {
    setText(e.target.value)
    keyPress(e);
};

  return (
    <div>
      <input type="text" onChange={onChange} value={text}/>
    </div>
  )
}

export default Search;
