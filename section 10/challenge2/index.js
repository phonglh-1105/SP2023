(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    } // khi click vào element body, event listener sẽ được gọi và thức thi callback func bên trong nó callback function này sẽ lấy element h1 bằng câu lệnh querySelector và thay đổi màu của nó sang blue. do biến color dc khai nảo ở hàm IIFE nên k cần select vào h1 nữa mà chỉ có thêm event vào element body đã thay đổi dược màu của thẻ h1 sau mỗi lần click
    );
})();