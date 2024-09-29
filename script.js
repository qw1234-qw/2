function showAlert(message) {
    const alertBox = document.getElementById('floatingAlert');
    alertBox.textContent = message; // 设置提示信息
    alertBox.style.display = 'block'; // 显示提示框
    setTimeout(() => {
        alertBox.style.display = 'none'; // 3秒后隐藏提示框
    }, 3000);
}

// 显示软件加载屏幕
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading'); // 获取加载屏幕元素
    loadingScreen.style.display = 'block'; // 显示加载屏幕
}

// 隐藏软件加载屏幕
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading'); // 获取加载屏幕元素
    loadingScreen.style.display = 'none'; // 隐藏加载屏幕
}

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

    showLoadingScreen(); // 显示加载中

    let timeout = setTimeout(() => {
        showAlert("超时未响应");
        window.location.href = "index.html"; // 超时后返回首页
    }, 20000); // 20秒超时

    // 使用 Fetch 请求确保页面加载成功
    fetch(url)
        .then(response => {
            if (response.ok) {
                clearTimeout(timeout); // 页面加载成功，清除超时
                hideLoadingScreen(); // 隐藏加载屏幕
                window.location.href = url; // 导航到指定页面
            } else {
                throw new Error('网络错误');
            }
        })
        .catch(error => {
            clearTimeout(timeout); // 清除超时
            showAlert("加载失败，返回首页");
            hideLoadingScreen(); // 隐藏加载屏幕
            window.location.href = "index.html"; // 加载失败返回首页
        });
}

// 页面加载时显示加载图像
window.onload = function() {
    showAlert("页面加载中...");
};