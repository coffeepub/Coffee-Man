var scores, roundScore, activePlayer

scores = [0, 0]
roundScore = 0
activePlayer = 1

document.querySelector('.dice').style.display = 'none'

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function btn() {
  // 1. random Number
  var dice = Math.floor(Math.random() * 6) + 1
  // 2. Display the results
  var diceDom = document.querySelector('.dice')
  diceDom.style.display = 'block'
  diceDom.src = '/image/dice-' + dice + '.png'
  //3. Update the round score IF thee rolled number was NOT a 1
})
