
interface IAppInput {
  inputText?: string;
  inputType: string;
  id?: string;
  inputPlaceholder: string;
  inputErrorText:string;
  onChange:(e:string)=> void;
  hasError?:boolean
}

export const AppInput = ({
  inputText,
  inputType,
  id,
  hasError,
  inputPlaceholder,
  inputErrorText,
  onChange,

}: IAppInput) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
      {inputText}
      <input
        required
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <span id="error-message">{inputErrorText}</span>
    </label>
  );
};
