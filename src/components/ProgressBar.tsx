
interface IProgressBar{
    currentStep:number
}

const indicatorStep=[1,2,3,4]
export const ProgressBar = ({currentStep}:IProgressBar) => {
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
       {
        indicatorStep.map((e,i)=>(
            <div key={e} className={`indicator__unit indicator__unit-1 ${currentStep>i && "_active"}`}></div>
        ))
       }
        
      </div>
    </div>
  );
};
