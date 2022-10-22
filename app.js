(function() { 
    // 
    let screen = document.querySelector('.screen');
    // calling all the buttons at once using query selectorAll
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    // we have so many button classes
    //so i want to check each and every one to find out which button was pressed
    // thats why we use for each
    buttons.forEach(function(button) {
        // event listener to check if button was pressed
        // define event name as click
        button.addEventListener('click', function(e) {
            // storing the value inside let value
            let value = e.target.dataset.num;
            // pushing value inside the screen
            screen.value += value;
        })
    });

    equal.addEventListener('click',function(e) {
        // if screen having value empty then the value will be empty
        if(screen.value === '') {
            screen.value = "Please enter";
        }else{
            // answer value will be the evaluate value of screen value
            let answer = eval(screen.value);//call evaluate function
            screen.value = answer;
        }
    })

    clear.addEventListener('click',function(e) {
        screen.value = "";
    })


})();