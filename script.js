document.getElementById("showBtn").addEventListener("click", function () {
  const container = document.getElementById("imageContainer");

  // Tạo thẻ <img>
  const img = document.createElement("img");
  img.src = "img/anh1.jpg";
  img.alt = "Ảnh từ JavaScript";

  // Xóa ảnh cũ nếu có (để tránh chồng nhiều ảnh)
  container.innerHTML = "";

  // Thêm ảnh vào container
  container.appendChild(img);
});
