document.getElementById('main-form')
        .addEventListener('submit', checkForm);

function checkForm (event) {
    event.preventDefault();
    let e = document.getElementById('main-form');

    let name = e.name.value;
    let pass = e.pass.value;
    let repass = e.repass.value;
    let state = e.state.value;
    
    let fail = "";

    if(name == "" || pass == "" || state == "")
        fail = "*Заполните все поля";
    else if(name.length <= 1 || name.length > 50)
        fail = "*Введите корректное имя";
    else if(pass != repass)
        fail = "*Пароли должны совпадать";
    else if(pass.split('&').lenth > 1)
        fail = "*Неккоректный пароль";

    if(fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("Все данные заполнены корректно");
    }
}