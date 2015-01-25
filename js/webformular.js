$(document).ready(function() {
	$('#myForm').validate({
		errorPlacement: function(error, element) {
			$(element).closest( "form" ).append(error);
			//"<div class='alert alert-danger' role='alert'>"+error+"</div>"
		},
    rules: {
        search: {
            required: true,
            maxlength: 50
        }
    },
    messages: {
				search: {
					required: '<div class="alert alert-danger" role="alert">Das Suchfeld darf nicht leer sein!</div>',
					maxlength: '<div class="alert alert-danger" role="alert">Der Suchtext darf Maximal 50 Zeichen lang sein!</div>'
				}
			}
    });
});