import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function ReducerInputs() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickName: '',
  });
  const { name, nickName } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <>
      <input type='text' name='name' value={name} onChange={onChange} />
      <input type='text' name='nickName' value={nickName} onChange={onChange} />
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickName}
      </div>
    </>
  );
}
