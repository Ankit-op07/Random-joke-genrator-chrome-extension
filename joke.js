fetch('https://icanhazdadjoke.com/slack')
  .then(response => response.json())
  .then(data => {

    const jokeText = data.attachments[0].text;
    document.getElementById('joke').innerHTML = jokeText;
  })
