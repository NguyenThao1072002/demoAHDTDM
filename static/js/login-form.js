$(document).ready(function(){
        $('#login-form').submit(function(e){
            e.preventDefault(); 

            let formData = {
                identifier: $('#username').val(),
                password: $('#password').val()
            };

            $.ajax({
                type: 'POST',
                url: 'http://localhost:1337/api/auth/local',
                data: formData,
                dataType: 'json',
                encode: true
            })
            .done(function(data){
                console.log(data); 
                alert('Đăng nhập thành công!');
            })
            .fail(function(xhr, status, error){
                console.error(xhr.responseText);
                alert('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
            });
        });
    });