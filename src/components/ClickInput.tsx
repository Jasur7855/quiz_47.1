
interface IClickInput{
    typeInput:string,
    placeholderInput:string
}

export const ClickInput = ({typeInput,placeholderInput}:IClickInput) => {
  return (
    <label className="input-wrapper">
      <input required type={typeInput} name="answer" placeholder={placeholderInput} />
      <span id="error-message">Введите ваш ответ</span>
    </label>
  );
};
