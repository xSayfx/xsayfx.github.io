const projects = {
    project1: {
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/13",
        images: ["https://xsayfx.github.io/محاليل_قاعدية_1.png", "https://xsayfx.github.io/محاليل_قاعدية_2.png"],
        download: "https://xsayfx.github.io/المحاليل_القاعدية.zip",
    },
    project2: {
//title
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/13",
        images: ["https://xsayfx.github.io/Ai_1.png", "https://xsayfx.github.io/Ai_2.png"],
        download: "https://xsayfx.github.io/Ai.zip",
    },
    project3: {
        subject: "يجب تنزيل المشروع",
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/5",
        images: ["https://xsayfx.github.io/excelclear.png"],
        download: "https://xsayfx.github.io/‪مشروع رقمية.xlsx",
    },
    project4: {
        subject: "يجب تنزيل المشروع",
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/5",
        images: ["https://xsayfx.github.io/docxclear.png"],
        download: "https://xsayfx.github.io/‪مشروع_الوحدة_الثانية_رقمية.docx",
    },
 project5: {
        subject: "تطبيق يعمل على الكمبيوتر | يجب تنزيل المشروع",
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/18",
        images: ["https://xsayfx.github.io/calccode.png"],
        download: "https://xsayfx.github.io/Calculator%20By%20Sayf.zip",
    },
 project6: {
        subject: "مشروع خاص لـ أ. أحمد عبدالله الغريبي",
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/21",
        images: ['https://xsayfx.github.io/islamic_1.png', 'https://xsayfx.github.io/islamic_2.png', 'https://xsayfx.github.io/islamic_3.png', 'https://xsayfx.github.io/islamic_4.png'],
        download: "https://xsayfx.github.io/Calculator%20By%20Sayf.zip",
    },
};

let currentProject = '';
let currentImageIndex = 0;

window.onload = function() {
    closeModal();
    closeMoreInfo();
    addNotificationsToUI(); // Call this here to initialize notifications
};

function openModal(projectId) {
    currentProject = projectId;
    currentImageIndex = 0;
    const project = projects[projectId];

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-subject').textContent = project.subject;
    document.getElementById('modal-image').src = project.images[currentImageIndex];

    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function openModal(projectId) {
    currentProject = projectId;
    currentImageIndex = 0; // Reset to the first image when opening modal
    const project = projects[projectId];

    // Display the first image in the array
    document.getElementById('modal-image').src = project.images[currentImageIndex];
    document.getElementById('modal').style.display = 'flex';
}

function changeImage(direction) {
    const project = projects[currentProject];
    const totalImages = project.images.length;

    // Update the image index based on direction
    currentImageIndex += direction;

    // Wrap around if the index goes out of bounds
    if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1; // Last image
    } else if (currentImageIndex >= totalImages) {
        currentImageIndex = 0; // First image
    }

    // Update the modal image to reflect the new index
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

function openStudentInfo() {
    document.getElementById('student-info-modal').style.display = 'flex';
}

function closeStudentInfo() {
    document.getElementById('student-info-modal').style.display = 'none';
}

function downloadProject() {
    const projectId = currentProject;
    const project = projects[projectId];

    if (project.download) {
        const link = document.createElement('a');
        link.href = project.download;
        link.download = `project-${projectId}.zip`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            window.location.href = "download.html";
        }, 500);
    } else {
        alert("لا يوجد رابط تنزيل لهذا المشروع.");
    }
}

// Notifications handling
const notifications = {
    ntf11: { name: "اشعار", details: "تم اضافة مشروع لمادة الاسلاميات", date: "2024-10-21" },
    ntf10: { name: "تحديث", details: "تم تعديل وتحسين الواجهة في صفحة التنزيلات", date: "2024-10-19 | v1.53" },
    ntf9: { name: "تحديث", details: "تم تحسين واجهة المستخدم", date: "2024-10-18 | v1.52" },
    ntf8: { name: "تحديث", details: "تم اضافة وضع ليلي, وتم تحسين واجهة المستخدم", date: "2024-10-18 | v1.51" },
    ntf7: { name: "تحديث", details: "تم اصلاح مشاكل عامة, ايضاً اضافة ميزة اعادة توجية تلقائياً", date: "2024-10-18 | v1.31" },
    ntf6: { name: "اشعار", details: "تم اضافة مشروع لمادة المهارات الرقمية", date: "2024-10-18" },
    ntf5: { name: "تحديث", details: "تم تحديث واجهة المستخدم وايضاً خانة وزر الاشعارات", date: "2024-10-18 | v1.30" },
    ntf4: { name: "اشعار", details: "بيتم تحديث واضافة ميزات غداً", date: "2024-10-17" },
    ntf3: { name: "تحديث", details: "تم تحديث شكل خانة الاشعارات بالكامل", date: "2024-10-17 | v1.22" },
    ntf2: { name: "تحديث", details: "اضافة ميزة جديدة : امكانية تحميل المشروع", date: "2024-10-17 | v1.21" },
    ntf1: { name: "تحديث", details: "اضافة ميزة جديدة : اشعارات", date: "2024-10-17 | v1.20" },
};

const notificationCount = document.getElementById('notificationCount');
const notificationsContent = document.querySelector('.notifications-content');
let isNotificationsOpen = false;

function toggleNotifications() {
    isNotificationsOpen = !isNotificationsOpen;
    notificationsContent.style.display = isNotificationsOpen ? 'block' : 'none';
}

function addNotificationsToUI() {
    const notificationList = notificationsContent.querySelector("ul");
    notificationList.innerHTML = ''; // Clear existing notifications
    let unreadCount = 0;
    for (const notificationId in notifications) {
        const notification = notifications[notificationId];
        const li = document.createElement("li");
        li.innerHTML = `<h3>${notification.name}</h3><p>${notification.details}</p><small>${notification.date}</small>`;
        notificationList.appendChild(li);
        unreadCount++;
    }

    notificationCount.textContent = unreadCount;
    notificationCount.style.display = unreadCount > 0 ? "block" : "none";
}
function closeDownloadModal() {
    if (window.open('', '_self').close) {
        // Close the window if it's allowed
        window.close();
    } else {
        // Redirect to a blank page if closing is not allowed
        window.location.href = "about:blank";
    }
}

// Event listener for the notifications button
document.querySelector('.notifications-button').addEventListener('click', toggleNotifications);

const modeSwitch = document.querySelector('.mode-switch');
const body = document.body;

// تحقق من الوضع المحفوظ في localStorage عند تحميل الصفحة
if (localStorage.getItem('mode') === 'night') {
  body.classList.add('night-mode');
  modeSwitch.innerHTML = '<i class="bi bi-moon-stars"></i>';
}

modeSwitch.addEventListener('click', () => {
  // Check the current mode
  if (body.classList.contains('night-mode')) {
    // Switch to light mode
    body.classList.remove('night-mode');
    modeSwitch.innerHTML = '<i class="bi bi-brightness-high"></i>';
    localStorage.setItem('mode', 'morning'); // Save morning mode
  } else {
    // Switch to dark mode
    body.classList.add('night-mode');
    modeSwitch.innerHTML = '<i class="bi bi-moon-stars"></i>';
    localStorage.setItem('mode', 'night'); // Save night mode
  }
});

