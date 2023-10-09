const addButton = document.querySelector('#add-button');    //

addButton.addEventListener('click', () => {
    // ���๮
    const input = document.querySelector('#input');
    const text = input.value.trim();

    if (text !== '') {
        addToList(text);
        input.value = '';
        input.focus();
    }
});
