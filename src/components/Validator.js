const emailValidator = () => {
  const emailInput = document.querySelector("#emailInput");
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const output = document.querySelector(".output");
  emailInput.addEventListener("input", () => {
    if (!emailRegex.test(emailInput.value)) {
      output.textContent = "wrong email format !";
      emailInput.setCustomValidity("I am expecting an email address!");
    } else {
      emailInput.setCustomValidity("");
      output.textContent = "";
    }
    if (emailInput.value === "") {
      output.textContent = "";
    }
  });
};

const countryValidator = () => {
  let countryInput = document.querySelector("#countryInput");
  const output = document.querySelector(".output");

  console.log(countryInput.value);
  if (
    countryInput.value === "" ||
    countryInput.value == null ||
    countryInput.value === undefined
  ) {
    countryInput.setCustomValidity("Please select a country");
    output.textContent = "please select a country";
  }
  countryInput.addEventListener("input", () => {
    console.log(countryInput.value);
    countryInput = document.querySelector("#countryInput");
    countryInput.setCustomValidity("");
    output.textContent = "";
  });
};

const zipcodeValidator = () => {
  const zipcodeInput = document.querySelector(".zipcodeInput");
  const zipcodeRegex =
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  const output = document.querySelector(".output");
  zipcodeInput.addEventListener("input", () => {
    if (!zipcodeRegex.test(zipcodeInput.value)) {
      zipcodeInput.setCustomValidity("Wrong zipcode format!");
      output.textContent = "wrong zipcode format! ";
    } else {
      zipcodeInput.setCustomValidity("");
      output.textContent = "";
    }
  });
};

export { emailValidator, zipcodeValidator, countryValidator };
