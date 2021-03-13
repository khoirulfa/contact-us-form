import 'bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';

let submit = document.getElementById('submit-btn');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	Swal.fire({
		title             : 'Are you sure',
		text              : 'to send a email?',
		icon              : 'info',
		showCancelButton  : true,
		confirmButtonText : 'Yes, send',
		cancelButtonText  : 'No, keep it'
	}).then((result) => {
		if (result.value) {
			name.value = '';
			email.value = '';
			message.value = '';
			Swal.fire('OK', 'Your email has been sent', 'success');
		}
	});
});
