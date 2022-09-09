let spans = document.querySelectorAll('span')
console.log(spans);
let input = document.querySelector('input')
console.log(input);
let btn = document.querySelector('button')

input.addEventListener('input', () => {
    spans.forEach(i => {
        i.classList.add('hidden');
        if (i.textContent.toLowerCase().search(input.value.toLowerCase()) > -1) {
            console.log(i.textContent[i.textContent.toLowerCase().search(input.value)]);
            i.classList.remove('hidden');
        }
        if (!((input.value).trim())) {
            i.classList.remove('hidden');
        }
    })
})