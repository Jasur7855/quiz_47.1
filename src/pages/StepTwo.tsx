import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { VariantsInput } from "../components/VariantsInput";
import { AppButton } from "../components/AppButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const navigate = useNavigate()

  const variantStep = [
    {
      inputText: "Frontend",
      id: "variant-1",
      inputType: "radio",
    },
    {
      inputText: "Python",
      id: "variant-2",
      inputType: "radio",
    },
    {
      inputText: "UX/UI",
      id: "variant-3",
      inputType: "radio",
    },
    {
      inputText: "Android Developper",
      id: "variant-4",
      inputType: "radio",
    },
  ];

  const [courseValue, setCourseValue] = useState("");


  return (
    <div className="container">
      <div className="wrapper step-two">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header
              headingText="2.На какой курс вы хотите пойти ?"
              headingType="h2"
            />
            <ul className="variants">
              {variantStep.map((elem, idx) => (
                <VariantsInput
                  key={idx}
                  inputType={elem.inputType}
                  id={elem.id}
                  inputText={elem.inputText}
                  onClick={()=>setCourseValue(elem.id)}
                />
              ))}
            </ul>
            <AppButton
              typeBtn="button"
              isDisabled={!courseValue}
              onClick={()=>navigate("/step-three")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
