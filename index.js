document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        // 'Content-Type': 'application/json'
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const jokeList = document.getElementById('joke-list')
    const newJokeLi = document.createElement('li')
    const username = document.getElementById('name-input').value


    if(username === "") return;

    fetchJoke().then(joke => { 
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)

    })
   
  })
})
