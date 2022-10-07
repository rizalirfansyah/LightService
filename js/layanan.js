function showHide(obj) {
    for (i = 1; i <= 15; i++) {  //CHANGED THIS LINE
      if (i == obj) {
        document.getElementById('q' + i).style.display = 'block';
      } else {
        document.getElementById('q' + i).style.display = 'none';
      }
    }
    return false;
  }

  // Button Toogle
  let buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });


  
  document.querySelector("section#iphone").addEventListener("change", () => {
    display(event.target.value);
  });
  const boxs = document.querySelectorAll("div.box");
  // Total the values of the checkboxes
  function totalIt(Group) {
    let input = document.querySelectorAll(`.${Group} [name=product]`),
      total = 0,
      totalInput = document.querySelector(`.${Group} [name=total]`)
    input.forEach(input => {
      if (input.checked) total += parseFloat(input.value);
      totalInput.value = total
    })
  }