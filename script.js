// 设置倒计时的目标日期和时间
const targetDate = new Date('2025-01-27T20:00:00').getTime();

// 更新倒计时的函数
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // 计算天、小时、分钟和秒
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 显示倒计时
    document.getElementById('countdown').innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;

    // 如果倒计时结束，显示一些信息
    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "吗的！走啦！新年快乐！";
    }
}

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);