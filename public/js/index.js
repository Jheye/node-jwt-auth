function addListeners() {
    watchSignUpSubmit();
}

function watchSignUpSubmit() {
    $('#signup').on('submit', function(e) {
        e.preventDefault();
        const username = $('#signup [name="username"]').val();
        const password = $('#signup [name="password"]').val();
        console.log(username, password);
        $.ajax({
            url: "/api/users",
            method: "POST",
            contentType: "application/json",
            data:JSON.stringify( {
                username: username,
                password: password
            })
        })
    });
};


















$(addListeners);