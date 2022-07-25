const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const finalValue = document.querySelector('span');

const counter = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};

incrBtn.addEventListener('click', () => {
    counter.increment();
    finalValue.textContent = counter.value;
});

decrBtn.addEventListener('click', () => {
    counter.decrement();
    finalValue.textContent = counter.value;
});