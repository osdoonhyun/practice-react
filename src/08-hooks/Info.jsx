import { useEffect, useState } from 'react';

export default function Info() {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  useEffect(() => {
    console.log('Effect');
    console.log(name);
    return () => {
      console.log('cleanUp');
      console.log(name);
      console.log(nickName);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <>
      <input type='text' value={name} onChange={onChangeName} />
      <input type='text' value={nickName} onChange={onChangeNickName} />
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickName}
      </div>
    </>
  );
}
