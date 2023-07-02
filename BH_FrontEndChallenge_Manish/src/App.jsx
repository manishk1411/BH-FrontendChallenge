import React, { useState } from "react";
import OtpInput from "react-otp-input";

const App = () => {
  const [otp, setOtp] = useState("------");

  return (
    <>
      <label>OTP</label>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span style={{ margin: "0 0.5rem" }}>{"     "}</span>}
        renderInput={(props) => <input {...props} />}
        isInputNum={true}
        inputStyle="otp"
        placeholder="-"
      />

      <p>Your TAN is {otp === "------" ? "" : otp}</p>
    </>
  );
};

// JavaScript code
// function handleInputClick() {
//   const loginComponent = document.querySelector('.login-component')
//   loginComponent.classList.add('highlight')
// }

export default App;
