const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const finalValue = document.querySelector('span');

const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};

incrBtn.addEventListener('click', () => {
    counterValue.increment();
    finalValue.textContent = counterValue.value;
});

decrBtn.addEventListener('click', () => {
    counterValue.decrement();
    finalValue.textContent = counterValue.value;
});