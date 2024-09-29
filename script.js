// 显示提示框
function showAlert(message) {
    const alertBox = document.getElementById('floatingAlert');
    alertBox.textContent = message; // 设置提示信息
    alertBox.style.display = 'block'; // 显示提示框
    setTimeout(() => {
        alertBox.style.display = 'none'; // 3秒后隐藏提示框
    }, 3000);
}

// 页面加载时的逻辑
window.onload = function() {
    showAlert("XX制作，仅用于合法用途，一切非法使用概不负责"); // 显示制作提示
};

// 导航到对应页面
function navigateToPage(buttonNumber) {
    let url;

    // 根据按钮号设置子页面的URL
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
            url = "index.html"; // 默认页面URL
    }

    // 使用 Fetch 请求确保页面加载成功
    fetch(url)
        .then(response => {
            if (response.ok) {
                window.location.href = url; // 导航到指定页面
             }
            
            // 检查提示框是否仍然可见
            setTimeout(() => {
                if (alertBox.style.display === 'block') {
                    showAlert("加载失败，请检查网络或使用流量"); // 显示网络问题提示
                }
            }, 3000); // 延迟3秒检查

            setTimeout(() => {
                window.location.href = "index.html"; // 加载失败返回首页
            }, 9000); // 9秒后跳转
        });
}