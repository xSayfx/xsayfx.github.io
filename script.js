const projects = {
  project1: {
    info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/13",
    images: ["https://xsayfx.github.io/محاليل_قاعدية_1.png", "https://xsayfx.github.io/محاليل_قاعدية_2.png"],
    download: "https://533df286-d0a7-4a12-9264-4a30b11117f2-00-7er3pnbj6iy4.worf.replit.dev/project.zip", // Replace with your actual download link
  },
  project2: {
    info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/13",
    images: ["https://xsayfx.github.io/Ai_1.png", "https://xsayfx.github.io/Ai_2.png"],
    download: "https://533df286-d0a7-4a12-9264-4a30b11117f2-00-7er3pnbj6iy4.worf.replit.dev/project.zip", // Replace with your actual download link
  },
  // ... more projects ...
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

// إغلاق النوافذ المنبثقة عند الضغط على أي مكان في الخ
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
function downloadProject() {
    const projectId = currentProject;
    const project = projects[projectId]; 

    // Check if a download URL is provided
    if (project.download) {
        const link = document.createElement('a');
        link.href = project.download;
        link.download = `project-${projectId}.zip`; // Or use a different file extension if needed

        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link);

        // Redirect to download.html after the download starts
        setTimeout(() => { // Use setTimeout for a slight delay
            window.location.href = "download.html"; 
        }, 500); // Adjust the delay as needed
    } else {
        // Handle the case where no download URL is available
        alert("لا يوجد رابط تنزيل لهذا المشروع."); // Display an error message 
    }
}
