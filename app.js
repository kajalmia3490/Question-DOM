function addToList() {
    let userInput = document.getElementById('question').value 

    let li = document.createElement('li')

    li.innerHTML = userInput

    document.getElementById('lists').appendChild(li)

    document.getElementById('question').value = ''

}