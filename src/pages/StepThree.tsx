import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";
import { EmojiInput } from "../components/EmojiInput";
import { ProgressBar } from "../components/ProgressBar";

const StepThree = () => {
  const navigate = useNavigate();
  const emojiStore = [
    {
      img: "./img/laugh.png",
      id: "variant-1",
      text: "Веселый",
      alt: "laugh",
    },
    {
      img: "./img/hearts.png",
      id: "variant-2",
      text: "Красивый",
      alt: "hearts",
    },
    {
      img: "./img/smirk.png",
      id: "variant-3",
      text: "Строгий",
      alt: "smirk",
    },
    {
      img: "./img/fright.png",
      id: "variant-4",
      text: "Пугливый",
      alt: "fright",
    },
  ];
  const [emojiValue, setEmojiValue] = useState("");

  

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              {emojiStore.map((elem, idx) => (
                <EmojiInput
                  key={idx}
                  id={elem.id}
                  alt={elem.alt}
                  img={elem.img}
                  emojiText={elem.text}
                  onClick={()=> setEmojiValue(elem.id)}
                />
              ))}
            </ul>
            <AppButton
              typeBtn="button"
              isDisabled={!emojiValue}
              onClick={()=>navigate("/step-four")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
