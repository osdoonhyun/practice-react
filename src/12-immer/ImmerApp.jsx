import { produce } from 'immer';
import { useCallback, useRef, useState } from 'react';

export default function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', userName: '' });
  const [data, setData] = useState({
    array: [],
    uselseeValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form]
  );

  const onChangeImmer = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        userName: form.userName,
      };

      setData({
        ...data,
        array: data.array.concat(info),
      });

      setForm({
        name: '',
        userName: '',
      });
      nextId.current += 1;
    },
    [data, form.name, form.userName]
  );

  const onSubmitImmer = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        userName: form.userName,
      };

      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );

      setForm({
        name: '',
        userName: '',
      });
      nextId.current += 1;
    },
    [data, form.name, form.userName]
  );

  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data]
  );

  const onRemoveImmer = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })

        // ...data,
        // array: data.array.filter(info=>info.id !== id)
      );
    },
    [data]
  );

  return <></>;
}
