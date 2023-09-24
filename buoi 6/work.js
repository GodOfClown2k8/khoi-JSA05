let async = {
  // khai báo 1 hàm bất đồng bộ
  // async function someName(){...}
  // Tự động biến đổi một hàm thông thường thành một Promise.
  // Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
  // Async cho phép sử dụng Await.
};

let await = [
  // tạm dừng việc thực hiện các hàm async.
  // Var result = await someAsyncCall ()😉
  // Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
  // Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
  // Await chỉ có thể được sử dụng bên trong các function async.
  // Await chỉ có thể được sử dụng bên trong các function async.
];

function mmb() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("bắt đầu");
    }, 2000);
  });
}
async function f() {
  let res = await mmb();
  console.log(res);
  console.log(2);
}
f();

["room"= 
{
  teacher: 
  {
    name: "Huyền",
    age: "?",
    something: "?",
  },
  student: 
  {
    "student 1": {
        name: "hola",
        age: "?",
      },
      "student 2": {
        name: "lolo",
      },
  },
  teacher2: 
  {
    name: "ai",
    age: "?",
  },
}
];

// API = API là cơ chế cho phép 2 thành phần phần mềm giao tiếp với nhau bằng một tập hợp các định nghĩa và giao thức. 
// --!Ví dụ: hệ thống phần mềm của cơ quan thời tiết chứa dữ liệu về thời tiết hàng ngày. Ứng dụng thời tiết trên điện thoại của bạn sẽ “trò chuyện” với hệ thống này qua API và hiển thị thông tin cập nhật về thời tiết hàng ngày trên điện thoại của bạn.
// --!GET : trả về 1 resource hoặc một danh sách resource
// --!POST: hỗ trợ tạo mới 1 resource
// --!PUT : hỗ trợ cập nhật thông tin cho resource
// --!DELETE : xóa resource
// --!fetch : gửi và nhận request js