import React, { useState, useCallback } from "react";
import { FetchPeople } from "./FetchPeople";
import axios from "axios";

export const Input = () => {
  const [state, setState] = useState("");
  const onChange = e => {
    const value = e.target.value;
    // setState(state => state + value);
    setState(() => value);
  };

  const [text, setText] = useState("");
  const onChangeText = e => {
    const value = e.target.value;
    setText(() => value);
  };

  const fetchUser = useCallback(() => {
    return axios.get("https://jsonplaceholder.typicode.com/users/" + state);
  }, [state]);

  return (
    <React.Fragment>
      <p>Value: {state}</p>
      <input type="text" value={state} onChange={onChange} />

      <p>Text: {text}</p>
      <input type="text" value={text} onChange={onChangeText} />
      <FetchPeople userId={state} fetchUser={fetchUser} />
    </React.Fragment>
  );
};
