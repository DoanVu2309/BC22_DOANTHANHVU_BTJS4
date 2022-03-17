document.getElementById("btn-bt1").onclick = function () {
  /** Bài Tập Số 1
   * Đầu vào:
   * - Nhập vào 3 số nguyên
   * Xử lý:
   * - Nếu số thứ nhất lớn hơn số thứ hai => số thứ nhất là số lớn nhất, số thứ hai bé nhất
   * - Nếu số thứ nhất lớn hơn số thứ ba => số thứ nhất là số lớn nhất, số thứ ba bé nhất
   * - Nếu số thứ hai lớn hơn số thứ ba => số thứ hai là số lớn nhất, số thứ ba bé nhất
   * - Nếu không ai sử dụng =>
   * Đầu ra:
   * - Sắp xếp 3 số theo thứ tự tăng dần
   */
  // ĐẦU VÀO - (INPUT)
  var soThuNhat = document.getElementById("soThuNhat").value;
  var soThuHai = document.getElementById("soThuHai").value;
  var soThuBa = document.getElementById("soThuBa").value;
  soThuNhat = parseInt(soThuNhat);
  soThuHai = parseInt(soThuHai);
  soThuBa = parseInt(soThuBa);
  var temp = 0;
  var thongBao = "";
  // CÁC BƯỚC XỬ LÝ - (PROCESSING STEPS)
  if (soThuNhat === "" && soThuHai === "" && soThuBa === "") {
    alert("Yêu cầu nhập vào không để trống");
  } else if (
    soThuNhat === soThuHai &&
    soThuHai === soThuBa &&
    soThuBa === soThuNhat
  ) {
    alert("Yêu cầu nhập lại");
  } else {
    if (soThuNhat > soThuHai) {
      temp = soThuNhat;
      soThuNhat = soThuHai;
      soThuHai = temp;
    }
    if (soThuNhat > soThuBa) {
      temp = soThuNhat;
      soThuNhat = soThuBa;
      soThuBa = temp;
    }
    if (soThuHai > soThuBa) {
      temp = soThuHai;
      soThuHai = soThuBa;
      soThuBa = temp;
    }
  }
  thongBao +=
    "Thứ tự tăng dần của các số là: " + soThuNhat + soThuHai + soThuBa;
  // ĐẦU RA - (OUTPUT)
  document.getElementById("content_1").innerHTML = thongBao;
};
document.getElementById("btn-bt2").onclick = function () {
  /** Bài Tập Số 2
   * Đầu vào:
   * - Nhập vào người đang sử dụng máy tính
   * Xử lý:
   * - Nếu bố đang sử dụng => nhập vào Bố hoặc bố hoặc B hoặc b
   * - Nếu mẹ đang sử dụng => nhập vào Mẹ hoặc mẹ hoặc M hoặc m
   * - Nếu anh trai đang sử dụng => nhập vào Anh Trai hoặc anh trai hoặc A hoặc a
   * - Nếu em gái đang sử dụng => nhập vào Em Gái hoặc em gái hoặc E hoặc e
   * - Nếu không ai sử dụng =>
   * Đầu ra:
   * - Đếm có bao nhiêu số chẵn, bao nhiêu số lẻ
   */
  // ĐẦU VÀO - (INPUT)
  var dangNhap = document.getElementById("dangNhap").value;
  var thongBao;
  // CÁC BƯỚC XỬ LÝ - (PROCESSING STEPS)
  if (dangNhap === "") {
    alert("Yêu cầu nhập vào không để trống");
  } else {
    if (
      dangNhap === "Bố" ||
      dangNhap === "B" ||
      dangNhap === "bố" ||
      dangNhap === "b"
    ) {
      thongBao = "Bố là người đang sử dụng máy tính";
    } else if (
      dangNhap === "Mẹ" ||
      dangNhap === "M" ||
      dangNhap === "mẹ" ||
      dangNhap === "m"
    ) {
      thongBao = "Mẹ là người đang sử dụng máy tính";
    } else if (
      dangNhap === "Anh Trai" ||
      dangNhap === "A" ||
      dangNhap === "anh trai" ||
      dangNhap === "a"
    ) {
      thongBao = "Anh Trai là người đang sử dụng máy tính";
    } else if (
      dangNhap === "Em Gái" ||
      dangNhap === "E" ||
      dangNhap === "em gái" ||
      dangNhap === "e"
    ) {
      thongBao = "Em Gái là người đang sử dụng máy tính";
    } else {
      thongBao = "Không có ai đang sử dụng hoặc ai đó đang sử dụng";
    }
  }
  // ĐẦU RA - (OUTPUT)
  document.getElementById("content_2").innerHTML = thongBao;
};

document.getElementById("btn-bt3").onclick = function () {
  /** Bài Tập Số 3
   * Đầu vào:
   * - Nhập vào 3 số nguyên
   * Xử lý:
   * - Số chẵn là số chia hết cho 2, số lẻ thì không chia hết cho 2
   * - Tạo ra các biến đếm chẵn lẻ cho từng số nguyên
   * - Tạo ra biến đếm tổng chẵn lẻ => cộng các biến chẵn lẻ lại với nhau
   * - Nếu không nhập số => Yêu cầu người dùng nhập vào
   * Đầu ra:
   * - Đếm có bao nhiêu số chẵn, bao nhiêu số lẻ
   */
  // ĐẦU VÀO - (INPUT)
  var soNguyen1 = document.getElementById("soNguyen1").value;
  var soNguyen2 = document.getElementById("soNguyen2").value;
  var soNguyen3 = document.getElementById("soNguyen3").value;
  soNguyen1 = parseInt(soNguyen1);
  soNguyen2 = parseInt(soNguyen2);
  soNguyen3 = parseInt(soNguyen3);
  var demChan_1 = 0;
  var demChan_2 = 0;
  var demChan_3 = 0;
  var demLe_1 = 0;
  var demLe_2 = 0;
  var demLe_3 = 0;
  var demChan = 0;
  var demLe = 0;
  var thongBao;
  // CÁC BƯỚC XỬ LÝ - (PROCESSING STEPS)
  if (soNguyen1 === "" && soNguyen2 === "" && soNguyen3 === "") {
    alert("Vui lòng nhập số");
  } else {
    if (soNguyen1 % 2 === 0) {
      demChan_1++;
    } else {
      demLe_1++;
    }
    if (soNguyen2 % 2 === 0) {
      demChan_2++;
    } else {
      demLe_2++;
    }
    if (soNguyen3 % 2 === 0) {
      demChan_3++;
    } else {
      demLe_3++;
    }
    demChan = demChan_1 + demChan_2 + demChan_3;
    demLe = demLe_1 + demLe_2 + demLe_3;
    thongBao = "Số chẵn là: " + demChan;
    thongBao += "<br/>";
    thongBao += "Số lẻ là: " + demLe;
  }
  // ĐẦU RA - (OUTPUT)
  document.getElementById("content_3").innerHTML = thongBao;
};

document.getElementById("btn-bt4").onclick = function () {
  /** Bài Tập Số 4
   * Đầu vào:
   * - Nhập vào 3 cạnh tam giác
   * Xử lý:
   * - Hình tam giác thì phải có đủ 3 cạnh => Không đủ 3 cạnh không xử lý
   * - Nếu là tam giác vuông => cạnh huyền = bình phương 2 cạnh góc vuông
   * - Nếu là tam giác đều => 3 cạnh bằng nhau
   * - Nếu là tam giác cân => 2 cạnh bằng nhau
   * - Nếu là tam giác nhọn => 1 cạnh góc nhọn
   * Đầu ra:
   * - Xuất ra màn hình tam giác nào
   */
  // ĐẦU VÀO - (INPUT)
  var canh_1 = document.getElementById("inputCanh1").value;
  var canh_2 = document.getElementById("inputCanh2").value;
  var canh_3 = document.getElementById("inputCanh3").value;
  var thongBao;
  // CÁC BƯỚC XỬ LÝ - (PROCESSING STEPS)
  if (canh_1 === "" && canh_2 === "" && canh_3 === "") {
    alert("Yêu cầu nhập vào");
  } else if (
    canh_1 + canh_2 > canh_3 &&
    canh_1 + canh_3 > canh_2 &&
    canh_2 + canh_3 > canh_1
  ) {
    canh_1 = parseInt(canh_1);
    canh_2 = parseInt(canh_2);
    canh_3 = parseInt(canh_3);
    if (
      canh_1 * canh_1 == canh_2 * canh_2 + canh_3 * canh_3 ||
      canh_2 * canh_2 == canh_1 * canh_1 + canh_3 * canh_3 ||
      canh_3 * canh_3 == canh_1 * canh_1 + canh_2 * canh_2
    ) {
      thongBao = "Tam giác này là tam giác vuông";
    } else if (canh_1 == canh_2 && canh_2 == canh_3) {
      thongBao = "Tam giác này là tam giác đều";
    } else if (canh_1 == canh_2 || canh_2 == canh_3 || canh_3 == canh_1) {
      thongBao = "Tam giác này là tam giác cân";
    } else {
      thongBao = "Tam giác này là tam giác nhọn";
    }
  } else {
    thongBao = "Không xác định tam giác";
  }
  // ĐẦU RA - (OUTPUT)
  document.getElementById("content_4").innerHTML = thongBao;
};
