type ButtonPropsType = {
  callBack: () => void;
  name: string;
};

export const Button = (props: ButtonPropsType) => {
  const { name, callBack } = props;

  const callBackHandler = () => {
    callBack();
  };

  return (
    <button id={"hw04-button"} onClick={callBackHandler}>
      {name}
    </button>
  );
};
