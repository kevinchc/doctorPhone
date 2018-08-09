$( '#frontend-post-form-submit' ).click(
    function(event) {
        var data = {kevin};
        $.post(
            'some_file.php',
            data,
            function( result ) {
                // stop if the captcha isn't correct
                if ( false === result.result ) {
                    event.preventDefault();
                }

                return result.result;
            }
        );
    }
);