$(document).ready(function() {
	$('#myForm').validate({
    rules: {
        search: {
            required: true,
            maxlength: 50
        }
    },
    messages: {
				search: {
					required: 'Das Suchfeld darf nicht leer sein!',
					maxlength: 'Der Suchtext darf Maximal 50 Zeichen lang sein'
				}
			}
    });
});