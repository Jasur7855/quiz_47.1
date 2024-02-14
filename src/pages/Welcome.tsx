import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { useState } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const goToNextPage = () => {
    if (nameValue && phoneValue) {
      navigate("/step-one");
    }
  };
  const handlerInputName= (value:string)  =>{
      setNameValue(value)
      validateName()
  }
  const handleInputPhone=(value:string)=>{
    setPhoneValue(value)
    validatePhone()
  }
  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleClick = () => {
    validateName();
    validatePhone();
    goToNextPage();
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form">
            <AppInput
              inputText="Ваше имя"
              inputType="text"
              id="username"
              inputPlaceholder="Введите ваше имя"
              inputErrorText="Введите имя"
              onChange={handlerInputName}
              hasError={nameError}
            />
            <AppInput
              inputText="Ваш номер"
              inputType="tel"
              id="phone"
              inputPlaceholder="+998 9- --- -- -- "
              inputErrorText="Введите номер в правильном формате"
              onChange={handleInputPhone}
              hasError={phoneError}
            />
            <AppButton
              typeBtn="button"
              isDisabled={!nameValue ||!phoneValue}
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
