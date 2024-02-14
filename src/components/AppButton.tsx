
interface IAppButton{
    typeBtn:"submit" | "button",
    id?: string,
    isDisabled: boolean,
    buttonText?:string,
    onClick: () => void
}

export const AppButton = ({typeBtn,buttonText="Далее",isDisabled,id="next-btn",onClick}:IAppButton) => {
  return (
    <button disabled={isDisabled} type={typeBtn} id={id} onClick={onClick}>
      {buttonText}
    </button>
  );
};
