const demoData = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  message: "This is a demo message for testing purposes.",
};

function fillForm() {
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input: HTMLInputElement | HTMLTextAreaElement) => {
    if (input.name.includes('name')) {
      input.value = demoData.name;
    } else if (input.name.includes('email')) {
      input.value = demoData.email;
    } else if (input.name.includes('phone')) {
      input.value = demoData.phone;
    } else if (input.name.includes('message')) {
      input.value = demoData.message;
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillForm") {
    fillForm();
  }
});