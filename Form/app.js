let firstName = "";
let lastName = "";
let dateOfBirth = "";
let country = "";
let gender = "male";
let profession = "";
let email = "";
let mobile = "";

const handleFirstNameChange = (e) => {
  firstName = e.target.value;
};

const handleLastNameChange = (e) => {
  lastName = e.target.value;
};

const handleDOBChange = (e) => {
  dateOfBirth = e.target.value;
};

const handleCountryChange = (e) => {
  country = e.target.value;
};

const handleGender = (val) => {
  gender = val;
};

const handleProfession = (e) => {
  profession = e.target.value;
};

const ValidateEmail = (mail) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(mail)) {
    return true;
  } else {
    const emailError = document.getElementById("emailError");
    emailError.innerHTML = "Invalid email";
    const emailStyle = document.getElementById("email");
    emailStyle.style.borderColor = "red";
    setTimeout(() => {
      emailError.innerHTML = "";
      emailStyle.style.borderColor = "#000000";
    }, 2000);
    return false;
  }
};

const handleEmail = (e) => {
  let val = e.target.value;
  let check = ValidateEmail(val);
  if (check) {
    email = val;
  }
};

const handleMobile = (e) => {
  const number = e.target.value;
  const check = validateMobileNumber(number);
  if (check) {
    mobile = e.target.value;
  }
};

const validateMobileNumber = (mobileNumber) => {
  const mobileNumberPattern = /^\d{10}$/;
  if (mobileNumberPattern.test(mobileNumber)) {
    return true;
  } else {
    const mobileError = document.getElementById("mobileError");
    mobileError.innerHTML = "Invalid mobile number";
    const mobileStyle = document.getElementById("mobile");
    mobileStyle.style.borderColor = "red";
    setTimeout(() => {
      mobileError.innerHTML = "";
      mobileStyle.style.borderColor = "#000000";
    }, 2000);
    return false;
  }
};

const validateFields = () => {
  if (firstName === "") {
    const firstNameError = document.getElementById("firstNameError");
    firstNameError.innerHTML = "Please enter first name";
    const firstName = document.getElementById("firstName");
    firstName.style.borderColor = "red";
    setTimeout(() => {
      firstNameError.innerHTML = "";
      firstName.style.borderColor = "#000000";
    }, 2000);
  } else if (lastName === "") {
    const lastNameError = document.getElementById("lastNameError");
    lastNameError.innerHTML = "Please enter last name";
    const lastName = document.getElementById("lastName");
    lastName.style.borderColor = "red";
    setTimeout(() => {
      lastNameError.innerHTML = "";
      lastName.style.borderColor = "#000000";
    }, 2000);
  } else if (dateOfBirth === "") {
    const dobError = document.getElementById("dobError");
    dobError.innerHTML = "Please enter date of birth";
    const dob = document.getElementById("dob");
    dob.style.borderColor = "red";
    setTimeout(() => {
      dobError.innerHTML = "";
      dob.style.borderColor = "#000000";
    }, 2000);
  } else if (country === "") {
    const countryError = document.getElementById("countryError");
    countryError.innerHTML = "Please select country";
    const countryStyle = document.getElementById("country");
    countryStyle.style.borderColor = "red";
    setTimeout(() => {
      countryError.innerHTML = "";
      countryStyle.style.borderColor = "#000000";
    }, 2000);
  } else if (profession === "") {
    const professionError = document.getElementById("professionError");
    professionError.innerHTML = "Please enter Profession";
    const professionStyle = document.getElementById("profession");
    professionStyle.style.borderColor = "red";
    setTimeout(() => {
      professionError.innerHTML = "";
      professionStyle.style.borderColor = "#000000";
    }, 2000);
  } else if (email === "") {
    const emailError = document.getElementById("emailError");
    emailError.innerHTML = "Please enter email";
    const emailStyle = document.getElementById("email");
    emailStyle.style.borderColor = "red";
    setTimeout(() => {
      emailError.innerHTML = "";
      emailStyle.style.borderColor = "#000000";
    }, 2000);
  } else if (mobile === "") {
    const mobileError = document.getElementById("mobileError");
    mobileError.innerHTML = "Please enter mobile number";
    const mobileStyle = document.getElementById("mobile");
    mobileStyle.style.borderColor = "red";
    setTimeout(() => {
      mobileError.innerHTML = "";
      mobileStyle.style.borderColor = "#000000";
    }, 2000);
  } else {
    return true;
  }
};

const handleReset = () => {
  console.log("Reset");
  document.getElementById("myform").reset();
  modal.style.display = "none";
  firstName = "";
  lastName = "";
  dateOfBirth = "";
  country = "";
  gender = "male";
  profession = "";
  email = "";
  mobile = "";
};

const handleSubmit = () => {
  const validate = validateFields();

  if (validate) {
    openModal();
    console.log("Submitted");
  }
};

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
  modalValues();
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function modalValues() {
  const firstNameDisplay = document.getElementById("firstNameDisplay");
  firstNameDisplay.innerHTML = firstName;

  const lastNameDisplay = document.getElementById("lastNameDisplay");
  lastNameDisplay.innerHTML = lastName;

  const dobDisplay = document.getElementById("dobDisplay");
  dobDisplay.innerHTML = dateOfBirth;

  const countryDisplay = document.getElementById("countryDisplay");
  countryDisplay.innerHTML = country;

  const genderDisplay = document.getElementById("genderDisplay");
  genderDisplay.innerHTML = gender;

  const professionDisplay = document.getElementById("professionDisplay");
  professionDisplay.innerHTML = profession;

  const emailDisplay = document.getElementById("emailDisplay");
  emailDisplay.innerHTML = email;

  const mobileDisplay = document.getElementById("mobileDisplay");
  mobileDisplay.innerHTML = mobile;
}
