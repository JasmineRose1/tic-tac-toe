document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')
  
    let currentPlayer = 'playerX'
  
    squares.forEach(square => {
      square.addEventListener('click', clickOutcome)
    })
  
    function clickOutcome(e) {
        //find out which square has been clicked using an array data structure
      const squareArray = Array.from(squares)//turn squares into arrays  Array ["f", "o", "o"]
      const index = squareArray.indexOf(e.target) // find out the index of the squares in 3x3 grid
      playerDisplay.innerHTML = currentPlayer
  
      if(currentPlayer === 'playerX') {
        squares[index].classList.add('playerX')
        currentPlayer = 'playerO'
      } else {
        squares[index].classList.add('playerO')
        currentPlayer = 'playerX'
      }
    }
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        console.log(users)
      })
  
  })