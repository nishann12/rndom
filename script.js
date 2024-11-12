document.addEventListener('DOMContentLoaded', () => {
    const addColorBtns = document.querySelectorAll('.add-color-btn');
    const circleBtn = document.querySelector('.circle-btn'); 
    const colorBoxContainer = document.querySelector('.color-box-container'); 

    let selectedColors = [
    ];
    // let colors = []

    function addColorBox(color) {
        const newColorBox = document.createElement('div');
        newColorBox.className = 'color-box';
        newColorBox.style.backgroundColor = color;
        // newColorBox.style.borderColor = 'black';
        colorBoxContainer.appendChild(newColorBox);
    }

    addColorBtns.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');  
            console.log(`click: ${color}`);

            if (selectedColors.includes(color)) {
                selectedColors = selectedColors.filter(c => c !== color);
                console.log(`Removed color: ${color}`);
                button.textContent = 'Add';  
                button.classList.add('add-color-btn');  
                button.classList.remove('remove-color-btn'); 
            } else {
                selectedColors.push(color);
                console.log(`Added color: ${color}`);
                button.textContent = 'Remove';  
                button.classList.add('remove-color-btn');  
                button.classList.remove('add-color-btn'); 
            }
        });
    });

    circleBtn.addEventListener('click', () => {
        if (selectedColors.length > 0) {
            const randomColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];
            console.log(`Random color selected: ${randomColor}`);
            addColorBox(randomColor);
        } else {
            console.log('No colors selected, adding transparent box.');
            addColorBox('transparent');
        }
    });
});
