const addButton = document.querySelector('#add-button');    //

addButton.addEventListener('click', () => {
    // 실행문
    const input = document.querySelector('#input');
    const text = input.value.trim();

    if (text !== '') {
        addToList(text);
        input.value = '';
        input.focus();
    }
});
