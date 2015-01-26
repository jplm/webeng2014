$(document).ready(function() {
	/*
	$('li').mouseover(function() {
		$(this).highlight();
	});
	*/
	$('#myForm').validate({
		errorPlacement: function(error, element) {
			$(element).closest( "form" ).append(error);
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
			},
	invalidHandler: function(event, validator) {
		$(this).effect('shake');
	}
    });
});