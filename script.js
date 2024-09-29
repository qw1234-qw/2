function showAlert(message) {
    const alertBox = document.getElementById('floatingAlert');
    alertBox.innerText = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

window.onload = function() {
    showAlert('XX制作，仅用于合法用途，一切非法使用概不负责');
};

function navigateToPage(buttonNumber) {
    let url;

    switch (buttonNumber) {
        case 1:
            url = "https://dyfllnqeesez.xyz/vod/list.html?type_id=1043";
            break;
        case 2:
            url = "http://www.yxxrd.cn/go_20240822/69613699";
            break;
        case 3:
            url = "http://xzzljsb.com/";
            break;
        case 4:
            url = "https://www.17cmm.top:8888/";
            break;
        case 5:
            url = "https://xfuns.pro/";
            break;
        case 6:
            url = "https://v6v3265.xyz/";
            break;
        default:
            url = "indeed.html";
    }

    showAlert('加载中...');
    setTimeout(() => {
        window.location.href = url;
    }, 500); // 延时500毫秒后跳转
}