(function () {
    let hovBtn = document.querySelectorAll('[data-hover-target]');
    hovBtn.forEach(button => {
        button.addEventListener('mouseenter', () => {
            let element = document.querySelector(button.dataset.hoverTarget);
            classAdding(element);
        })
    })
    function classAdding(element){
        element.classList.add('active');
    }
    function classRemove(element){
        element.classList.remove('active');
    }
    hovBtn.forEach(button => {
        button.addEventListener('mouseleave', () => {
            let element = document.querySelector(button.dataset.hoverTarget);
            classRemove(element);
        })
    })


})()