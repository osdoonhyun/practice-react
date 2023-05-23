import { useState } from 'react';

export default function IterationComponent() {
  const [items, setItems] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onClickButton = () => {
    const nextItems = items.concat({
      id: nextId + 1,
      text: inputText,
    });
    setNextId(nextId + 1);
    setInputText('');
    setItems(nextItems);
  };

  const onClickItem = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const ItemList = items.map((item) => (
    <li
      onCursor={'pointer'}
      key={item.id}
      onDoubleClick={() => onClickItem(item.id)}
    >
      {item.text}
    </li>
  ));
  return (
    <>
      <input type='text' value={inputText} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
      <ul>{ItemList}</ul>
    </>
  );
}
