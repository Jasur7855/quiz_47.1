import { useState } from "react";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

const StepOne = () => {
  const navigate = useNavigate();
  const [questionValue, setQustionValue] = useState("");
  const [questionError, setQustionError] = useState(false);

  const goToNextPage = () => {
    if (!questionError) {
      navigate("/step-two");
    } else {
      navigate("/step-one");
    }
  };
  const questionValidate = () => {
    if (!questionValue) {
      setQustionError(true);
    } else {
      setQustionError(false);
    }
  };

  const handlerClick = () => {
    questionValidate();
      goToNextPage();
    
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
           <Header headingText={"Где вы узнали про нашу школу ?"} headingType={"h2"}/>
            <AppInput
              inputType="text"
              inputPlaceholder="Ваш ответ"
              inputErrorText="Введите ваш ответ"
              onChange={(e) => setQustionValue(e)}
              hasError={questionError}
            />

            <AppButton
              onClick={handlerClick}
              isDisabled={!questionValue}
              buttonText="Далее"
              typeBtn="button"
            />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
