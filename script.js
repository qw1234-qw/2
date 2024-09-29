function floatingAlert() {
      const alertBox = document.getElementById('floatingAlert');
      alertBox.innerText.display = 'block'; // 显示提示框
      setTimeout(() => {
        alertBox.style.display = 'none'; // 3秒后隐藏提示框
      }, 3000);
    }

    // 页面加载时显示加载图像
    window.onload = function() {
      showAlert();
      const loadingScreen = document.getElementById('loading');
      setTimeout(() => {
        loadingScreen.style.display = 'none'; // 3秒后隐藏加载图像
      }, 4000);
    };
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
 
   hideLoadingScreen()



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
            url = "indeed.html"; // 默认页面URL
    }
    floatingAlert('加载中...');
    showLoadingScreen(); // 显示加载中
    window.location.href = url;
    

    // 在这里隐藏加载屏幕，延迟4秒后导航
    setTimeout(() => {
        hideLoadingScreen(); // 隐藏加载屏幕
         // 导航到指定页面
    }, 99999999000); 
}
   window.onload = () => showAlert('XX制作，仅用于合法用途，一切非法使用概不负责');