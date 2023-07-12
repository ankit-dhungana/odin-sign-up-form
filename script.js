document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const errorText = document.querySelector(".error-text");
  console.log(errorText.textContent);

  passwordInput.classList.add(".invalid");
  confirmPasswordInput.classList.add(".invalid");

  confirmPasswordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    errorText.style.display = "block";
    passwordInput.style.border = "2px solid var(--invalid-color)";
    confirmPasswordInput.style.border = "2px solid var(--invalid-color)";
    if (
      password === confirmPassword &&
      password.length === confirmPassword.length &&
      password.length >= 3
    ) {
      errorText.style.display = "none";
      passwordInput.style.border = "2px solid var(--vaild-color)";
      confirmPasswordInput.style.border = "2px solid var(--vaild-color)";
    }
  });
});
