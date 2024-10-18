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
        images: ["https://xsayfx.github.io/excelmain.png"],
        download: "https://xsayfx.github.io/‪مشروع رقمية.xlsx",
    },
    project4: {
        subject: "يجب تنزيل المشروع",
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/5",
        images: ["https://xsayfx.github.io/docx.png"],
        download: "https://xsayfx.github.io/‪مشروع_الوحدة_الثانية_رقمية.docx",
    },
 project5: {
        subject: "تطبيق يعمل على الكمبيوتر | يجب تنزيل المشروع",
        info: "الطالب : سيف اسماعيل دياب | الفصل : 2/3 | التاريخ : 2024/10/18",
        images: ["https://xsayfx.github.io/calcmain.png"],
        download: "https://xsayfx.github.io/CalcBySayf.zip",
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

function changeImage(direction) {
    const project = projects[currentProject];
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = project.images.length - 1;
    } else if (currentImageIndex >= project.images.length) {
        currentImageIndex = 0;
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
      window.location.href = "about:blank"; 
    }
// Event listener for the notifications button
document.querySelector('.notifications-button').addEventListener('click', toggleNotifications);
