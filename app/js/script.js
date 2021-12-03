/* ================ Variables ================ */
const bill = document.querySelector('.bill');
const person = document.querySelector('.person');
const custoTip = document.querySelector('.custom');
const tipAmount = document.querySelector('.tip-amount');
const total = document.querySelector('.total');
const tipButtons = document.querySelectorAll('.button-tip');
const errBill = document.querySelector('.error-bill');
const errPerson = document.querySelector('.error-person');

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

const selectTip = () => {
	tipButtons.forEach((button) => {
		button.addEventListener('click', () => {
			if (button.innerHTML === '5%') {
				console.log('5%!');
			}
		});
	});
};
selectTip();

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

buttonActive();
validation();
