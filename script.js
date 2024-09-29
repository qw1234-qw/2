// 显示提示框
function showAlert(message) {
    alert(message);
}

// 页面加载时的逻辑
window.onload = function() {
    showAlert("页面加载成功");
};

// 导航到对应页面
function navigateToPage(buttonNumber) {
    const urls = {
        1: "https://dyfllnqeesez.xyz/vod/list.html?type_id=1043",
        2: "http://www.yxxrd.cn/go_20240822/69613699",
        3: "http://xzzljsb.com/",
        4: "https://www.17cmm.top:8888/",
        5: "https://xfuns.pro/",
        6: "https://v6v3265.xyz/"
    };

    // 获取对应的URL，默认使用首页
    const url = urls[buttonNumber] || "index.html";

    // 直接导航到指定页面
    window.location.href = url; 
}