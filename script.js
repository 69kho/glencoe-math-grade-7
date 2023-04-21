const form = document.querySelector('#message-form');
const messages = document.querySelector('#messages');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.elements[0].value;
  const message = form.elements[1].value;

  // Make a request to the OpenAI API with the user's message as the input
  fetch(`https://api.openai.com/v1/engines/davinci-codex/completions?prompt=${message}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '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'
    }
  })
  .then(response => response.json())
  .then(data => {
    const response = data.choices[0].text;

    // Add the user's message and the chatbot's response to the chatbox
    const li1 = document.createElement('li');
    li1.innerText = `${name}: ${message}`;

    const li2 = document.createElement('li');
    li2.innerText = `ChatGPT: ${response}`;

    messages.appendChild(li1);
    messages.appendChild(li2);

    form.reset();
  });
});
