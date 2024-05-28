const menuToggle=document.querySelector('.menuToggle');
        menuToggle.onclick = function() 
        {
            menuToggle.classList.toggle('active')
        }




document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const inputValue = document.getElementById('inputValue').value;

    fetch('/run-python-function', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input_value: inputValue })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = data.result;
    })
    .catch(error => console.error('Error:', error));
});