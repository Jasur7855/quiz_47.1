interface IEmojiInput{
    id:string
    alt:string
    img:string
    emojiText:string
    onClick: (e:React.MouseEvent<HTMLInputElement>) => void
}


export const EmojiInput = ({id,alt,img,emojiText,onClick}:IEmojiInput) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={id} onClick={onClick} />
      <label htmlFor={id}>
        <img src={img} alt={alt} />
        <p>{emojiText}</p>
      </label>
    </li>
  );
};
