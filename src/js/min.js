import 'bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';

let submitBtn = document.getElementById('submit-btn');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let form = document.getElementById('form');

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (name.value == '' || email.value == '' || message.value == '') {
		Swal.fire('Error', 'Please check the missing fields', 'error');
	} else {
		Swal.fire({
			title              : 'Are you sure',
			text               : 'To sent email?',
			icon               : 'question',
			showCancelButton   : true,
			confirmButtonColor : '#3085d6',
			cancelButtonColor  : '#d33',
			confirmButtonText  : 'Yes, sent it!'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('OK!', 'Your email has been received.', 'success');
			}
		});
	}
});
