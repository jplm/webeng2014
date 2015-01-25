$(document).ready(function() {
	$("#myForm").validate({
    rules: {
        search: {
            minlength: 1,
            maxlength: 50,
            required: true
        }
    }
    });
});