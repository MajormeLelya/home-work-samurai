import { ChangeEvent, Dispatch, SetStateAction } from "react";

type InputPropsType = {
  currentText: string;
  setCurrentText: Dispatch<SetStateAction<string>>; // () => void
};

export const Input = (props: InputPropsType) => {
  const { currentText, setCurrentText } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
  };

  return (
    <input
      id={"hw04-input"}
      type="text"
      value={currentText}
      onChange={onChangeHandler}
    />
  );
};
