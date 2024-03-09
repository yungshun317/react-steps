import { useState } from "react";

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
];

export default function App() {
  // const arr = useState(1);
  // console.log(arr);
  /*
  Array(2)
    0: 1
    1: ƒ ()
    length: 2
    [[Prototype]]: Array(0)
  */
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
      if (step > 1) setStep(step - 1);
  }

  function handleNext() {
      if (step < 3) setStep(step + 1);
  }

  return (
      <>
          <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>

          {isOpen && (
              <div className="steps">
                  <div className="numbers">
                      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                  </div>

                  <p className="message">Step {step}: {messages[step - 1]}</p>

                  <div className="buttons">
                      {/* <button className="previous" onClick={() => alert("Previous")}>Previous</button> */}
                      <button className="previous" onClick={handlePrevious}>Previous</button>
                      <button className="next" onClick={handleNext}>Next</button>
                  </div>
              </div>
          )}
      </>
  )
}
