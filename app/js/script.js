/* ================ Variables ================ */
const bill = document.querySelector('.bill');
const person = document.querySelector('.person');
const customTip = document.querySelector('.custom');
const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total');
const tipButtons = document.querySelectorAll('.button-tip');
const errBill = document.querySelector('.error-bill');
const errPerson = document.querySelector('.error-person');
const resetButton = document.querySelector('.button-reset');

let percent = 0;
let billValue;
let personValue;
let tip;
let total;

// アクティブ状態のボタンを設定
const buttonActive = () => {
	tipButtons.forEach((button) => {
		button.addEventListener('click', () => {
			tipButtons.forEach((el) => {
				el.classList.remove('active');
			});
			button.classList.add('active');
		});
	});
};

// チップボタンの値を取得
const selectTip = () => {
	tipButtons.forEach((button) => {
		button.addEventListener('click', (e) => {
			percent = Number(e.target.value);
		});
	});
};

// チップのパーセントをカスタムした時
const customedTip = () => {
	customTip.addEventListener('input', (e) => {
		percent = Number(e.target.value / 100);
	});
};

// チップの計算
const calcTip = () => {
	selectTip();
	customedTip();
	person.addEventListener('input', () => {
		billValue = Number(bill.value);
		personValue = Number(person.value);
		if (personValue === '' || personValue === 0) {
			return false;
		}
		tip = ((billValue * percent) / personValue).toFixed(2);
		total = billValue / personValue + Number(tip);

		tipAmount.innerHTML = `$${tip}`;
		totalAmount.innerHTML = `$${total}`;
	});
};

// 0の時エラーを出す
const validation = () => {
	bill.addEventListener('keyup', () => {
		if (Number(bill.value) !== 0) {
			errBill.style.display = 'none';
		} else {
			errBill.style.display = 'block';
		}
	});

	person.addEventListener('keyup', () => {
		if (Number(person.value) !== 0) {
			errPerson.style.display = 'none';
		} else {
			errPerson.style.display = 'block';
		}
	});
};

const reset = () => {
	resetButton.addEventListener('click', () => {
		bill.value = '';
		person.value = '';
		tipButtons.forEach((button) => {
			button.classList.remove('active');
		});
		customTip.value = '';
		tipAmount.innerHTML = '$0.00';
		totalAmount.innerHTML = '$0.00';
	});
};

buttonActive();
validation();
calcTip();
reset();
