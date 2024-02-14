
interface IVariantsInput{
    inputType:string
    id:string
    inputText:string
    onClick: (e:React.MouseEvent<HTMLInputElement>) => void
}


export const VariantsInput = ({inputType,id,inputText,onClick}:IVariantsInput )=> {
  return (
    <li className="variant-wrapper">
      <input required type={inputType} name="variant" id={id} onClick={onClick}/>
      <label htmlFor={id}>{inputText}</label>
    </li>
  );
};



