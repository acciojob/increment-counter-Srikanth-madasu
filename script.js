//your JS code here. If required.


const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementBtn');

  incrementButton.addEventListener('click', () => {
    let counterValue = parseInt(counterElement.textContent);
    alert(counterValue);
    counterValue++;
    counterElement.textContent = counterValue;
  });