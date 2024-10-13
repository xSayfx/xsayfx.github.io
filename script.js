const projects = {
  project1: {
    //title: "اسم المشروع 1",
    //subject: "اسم المادة 1",
      info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/13", // This line adds an info property
    images: ["images/محاليل_قاعدية_1.png", "images/محاليل_قاعدية_2.png"],
  },
  project2: {
    //title: "اسم المشروع 2",
    //subject: "اسم المادة 2",
      info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/13", // This line adds an info property
    images: ["images/Ai_1.png", "images/Ai_2.png"],
  },
  // يمكنك إضافة المزيد من المشاريع هنا
    
};

let currentProject = '';
let currentImageIndex = 0;

window.onload = function() {
  closeModal();
  closeMoreInfo();
};

function openModal(projectId) {
  currentProject = projectId;
  currentImageIndex = 0; // إعادة تعيين مؤشر الصورة
  const project = projects[projectId];

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-subject').textContent = project.subject;
  document.getElementById('modal-image').src = project.images[currentImageIndex];

  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function changeImage(direction) {
  const project = projects[currentProject];
  currentImageIndex += direction;

  // تحقق من حدود الفهرس
  if (currentImageIndex < 0) {
    currentImageIndex = project.images.length - 1; // الانتقال إلى آخر صورة
  } else if (currentImageIndex >= project.images.length) {
    currentImageIndex = 0; // العودة إلى أول صورة
  }

  document.getElementById('modal-image').src = project.images[currentImageIndex];
}

function openMoreInfo() {
  const project = projects[currentProject];
  const moreInfoContent = project.info ? project.info : `تفاصيل أكثر عن ${project.title}`;
  document.getElementById('more-info-content').textContent = moreInfoContent;
  document.getElementById('more-info-modal').style.display = 'flex';
}

function closeMoreInfo() {
  document.getElementById('more-info-modal').style.display = 'none';
}

// إغلاق النوافذ المنبثقة عند الضغط على أي مكان في الخلفية
window.onclick = function(event) {
  if (event.target === document.getElementById('modal')) {
    closeModal();
  } else if (event.target === document.getElementById('more-info-modal')) {
    closeMoreInfo();
  }
}
// Open the Student Info Modal
function openStudentInfo() {
    document.getElementById('student-info-modal').style.display = 'flex';
}

// Close the Student Info Modal
function closeStudentInfo() {
    document.getElementById('student-info-modal').style.display = 'none';
}

// Open the Student Info Modal on page load
window.onload = function() {
    openStudentInfo();
};
// Open the Fullscreen Image
function openFullScreenImage() {
    const fullScreenImageModal = document.getElementById('full-screen-image-modal');
    const fullScreenImage = document.getElementById('full-screen-image');
    fullScreenImage.src = document.getElementById('modal-image').src; // استخدام الصورة الحالية في النافذة المنبثقة
    fullScreenImageModal.style.display = 'flex'; // عرض النافذة
}

// Close the Fullscreen Image
function closeFullScreenImage() {
    document.getElementById('full-screen-image-modal').style.display = 'none'; // إغلاق النافذة
}
